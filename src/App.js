import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppBar from "./components/AppBar";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.getCurrentUser());
    }, [dispatch]);
  
  return (
    <div className="mainContainer">
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView/>
          </PublicRoute>

          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
          >
          <RegisterView/>
          </PublicRoute>

          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
          >
          <LoginView />
          </PublicRoute>
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
          >
          <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
}


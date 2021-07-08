import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

const styles = {
    form: {
        width: "320",
    },
    label: {
        display: "flex",
        flexDirection: "column",
        margiBotoom: 15,
    },
};

const initialState = { email: "", password: "" };

const LoginView = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const onLogin = (state) => dispatch(authOperations.logIn(state));
  const handleChange = (e) => {
     setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(state);
    setState(initialState);
  };
  return (
    <div>
      <h1> Login Page</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            type="text"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default LoginView;




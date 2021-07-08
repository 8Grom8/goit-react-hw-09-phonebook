import React, { useState } from "react";
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

const initialState = {     name: "", email: "", password: "", };

const RegisterView = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const onRegister = (state) => dispatch(authOperations.register(state));

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const  handleSubmit = (e) => {
      e.preventDefault();
      onRegister(state);
      setState(initialState);
    };

  return (
    <div>
      <h1> Register Page</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Registaration</button>
      </form>
    </div>
  );
}

export default RegisterView;






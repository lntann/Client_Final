
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import "./login.css";
import { axiosInstance } from '../../config';
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { loading, error , dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log(dispatch);
    dispatch({type: 'LOGIN_START'});
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: credentials.username,
        password: credentials.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE"});
    }
  };


  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          id="username"
          onChange={handleChange}
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={loading} onClick={handleSubmit} >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
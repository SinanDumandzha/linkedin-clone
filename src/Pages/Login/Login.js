import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(
        () => {
          dispatch(
            login({
              displayName: auth.currentUser.displayName,
              email: auth.currentUser.email,
              photoURL: auth.currentUser.photoURL,
              uid: auth.currentUser.uid,
            })
          );
        },

        navigate("/")
      )
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="linkedin-logo" />
      <form action="">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <Link to="/register">
          {" "}
          <span className="login__register">Register Now</span>{" "}
        </Link>
      </p>
    </div>
  );
};

export default Login;

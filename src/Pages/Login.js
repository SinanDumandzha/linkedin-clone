import React, { useState } from "react";
import "./Login.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(
          login({
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            uid: auth.currentUser.uid,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        });
      })
      .then(() => {
        dispatch(
          login({
            displayName: name,
            email: auth.currentUser.email,
            photoURL: profilePic,
            // emailVerified: auth.currentUser.emailVerified,
            uid: auth.currentUser.uid,
          })
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="login">
      <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="linkedin-logo" />
      <form action="">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required if regisitering)" />
        <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile picture URL (optional)" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;

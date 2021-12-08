import React, { useState } from "react";
import "./Register.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            uid: auth.currentUser.uid,
          })
        );
      })
      .then(navigate("/"))
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="register">
      <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="linkedin-logo" />
      <form action="">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
        <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile picture URL" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

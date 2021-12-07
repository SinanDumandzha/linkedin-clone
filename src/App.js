import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Login from "./Pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./store/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import RecomSidebar from "./components/RecomSidebar/RecomSidebar";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          login({
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            uid: auth.currentUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      {user && <Header />}
      {!user ? (
        <Login />
      ) : (
        <div className="app__main">
          <Sidebar />
          <Feed />
          <RecomSidebar />
        </div>
      )}
    </div>
  );
};

export default App;

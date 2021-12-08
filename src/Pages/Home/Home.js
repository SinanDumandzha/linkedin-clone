import React from "react";
import "./Home.css";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import RecomSidebar from "../../components/RecomSidebar/RecomSidebar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__main">
        <Sidebar />
        <Feed />
        <RecomSidebar />
      </div>
    </div>
  );
};

export default Home;

import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;

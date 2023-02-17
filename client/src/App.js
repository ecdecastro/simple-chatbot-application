import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/js/Header";
import Signup from "./components/js/Signup";
import Login from "./components/js/LoginPage";
import Home from "./components/js/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

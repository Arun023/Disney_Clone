import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./pages/Login/Login";
import Layout from "../Layout";
import { Suspense } from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

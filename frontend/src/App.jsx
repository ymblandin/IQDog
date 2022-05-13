// import Home from "./pages/Home";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import "./components/Background.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddDog from "./pages/AddDog";
import Test from "./pages/Test";
import Results from "./pages/Results";
import { IdProvider } from "./contexts/IdContext";

function App() {
  return (
    <IdProvider>
      <Router>
        <div className="App">
          <Background />
          <h3 className="title">IQ DOGG</h3>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/adddog" element={<AddDog />} />
            <Route path="/home" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </Router>
    </IdProvider>
  );
}

export default App;

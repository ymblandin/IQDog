// import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import "./components/Background.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Results from "./pages/Results";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Background />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

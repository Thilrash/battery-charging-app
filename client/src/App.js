import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import SignUp from "./Components/SignUp/SignUp";


function App() {
  return <div className="App">
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
    </Routes>
  </BrowserRouter>
    
    
  </div>;
}

export default App;

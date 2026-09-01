import React from "react";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>Welcome to React Router</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>

      </Routes>
    </div>
  );
}

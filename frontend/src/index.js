import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/responsive.css";
import Homepage from "./Landing_page/Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutpage from "./Landing_page/About/Aboutpage";
import SupportPage from "./Landing_page/Support/SupportPage";
import SignupPage from "./Landing_page/Signup/SignupPage";
import Loginpage from "./Landing_page/Login/Loginpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/about" element={<Aboutpage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
    </Routes>
  </BrowserRouter>
);

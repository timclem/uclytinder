import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  
  return (
    <div className="Navbar">
      
        <>
          <a href="/register">Register</a>
          <a href="/home">Home</a>
          <a href="/login">Login</a>
        </>
      
    </div>
  );
}

export default Navbar;


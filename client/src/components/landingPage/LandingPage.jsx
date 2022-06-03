import React from "react";
import { NavLink } from 'react-router-dom'; 
import "./LandingPage.css";

export default function LandingPage() {
    return (
      <div className="landingpage">
          <div className="background">
    
            <h1  className="homeTitle">🦴DOGS-Api🦴</h1>
            <div className="buttonPosition">
            <NavLink to ="/home">
                <button className="inicio">START 🐶</button>
            </NavLink>
            </div>
            </div>
            </div>
     
    )
} 
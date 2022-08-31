import React from "react";
import { NavLink } from 'react-router-dom'; 
import "./LandingPage.css";

export default function LandingPage() {
    return (
      
          <div className="background">

                <section className="title-position">
                    <h1  className="homeTitle">🦴DOGS-Api🦴</h1>

                </section>  

                <section className="buttonPosition">
                <NavLink to ="/home">
                    <button className="inicio">START 🐶</button>
                </NavLink>
                </section>
            </div>
           
     
    )
} 
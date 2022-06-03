import React from "react";
import  "./Card.css"; 



export default function Card({ name, image, temperament, weight}) {
    return (
        <div> 
            <div className="box">
            <div>
            <p className="dogs">{name}</p>
            <div  className="overlay" >
            <img className="imageDog" src={image} alt= "Image not found"   />
            </div>
           
            <div className="text">
           
        
            <p className="weight">Weight : {weight}  (Kg) </p>
        

            <div className="prueba">

            <h2 className="tempsCard"> Temperaments:{temperament} </h2>
            </div>
            </div>
            </div>
            </div>
         </div>
    );
}
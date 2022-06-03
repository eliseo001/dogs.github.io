import React from "react";
import { useEffect }  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dogDetail } from "../../actions";
import  "./Detail.css";



export default function Detail (props) {
    console.log(props)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dogDetail(props.match.params.id))     
    }, [dispatch, props.match.params.id])
    
    const myDog = useSelector((state) => state.detail)    

return (
    <div className="bkg"> 
     <div className="container">
        { 
        myDog.length > 0 ?
        <div className="detailContainer"> 
         <h1 className="title">{myDog[0].name} </h1>  
         <img className="detailImg" src = {myDog[0].image} alt="Img not found"  />  
         <p className="text"> Temperaments: {!myDog[0].createdInDb? myDog[0].temperament + " " : myDog[0].temperaments.map(el => el.name + (" "))}</p>  
         <p className="text"> Height: {myDog[0].height} Cm</p> 
         <p className="text"> Weight: {myDog[0].weight} Kg </p> 
         <p className="text"> Life span: {myDog[0].createdDb? myDog[0].life_span + "years" : myDog[0].life_span}  </p>
         
         


        </div> : <p className="text"> Loading...</p>                                                          
    }
     </div>
     <div className="back">
                           <Link to="/home"><button className="backbutton" >Back </button></Link>
                            </div>   
    </div>
)
}



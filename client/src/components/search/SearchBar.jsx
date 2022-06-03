import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../actions";
import  "./SearchBar.css";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");   

    function Input(e) {
        e.preventDefault();      
        setName(e.target.value)        
    }

    function Submit(e) {
        e.preventDefault();   
        dispatch(getDogsByName(name));  
        setName("")               
    }

    return (
        <div  className="SearchBar" >
            <input className="input" type="text" value={name} placeholder="Search Dog" onChange={(e) => Input(e)} />
            <button className="button" type="submit" onClick={(e) => Submit(e)} > Search</button>
        </div>
    )
}



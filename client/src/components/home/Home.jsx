import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, orderbyName, orderbyWeight, filterDogsCreated, filterDogTemp, getTemperaments } from "../../actions";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import Paged from "../paginado/Paged";
import SearchBar from "../search/SearchBar";
import   "./Home.css"; 
import { NavLink } from 'react-router-dom'; 





export default function Home () {

const dispatch = useDispatch()                        
const allDogs = useSelector((state) => state.allDogs)   
//paginado
const [currentPage, setCurrentPage] = useState(1)     
const [ dogsPerPage ] = useState (8)                   
const indexOfLastDog = currentPage * dogsPerPage      
const indexOffirstDog = indexOfLastDog - dogsPerPage   
const currentDogs = allDogs.slice(indexOffirstDog, indexOfLastDog)   

const pagedTotal = (pageNumber) => {                      
    setCurrentPage(pageNumber)                        
}                                                 

const allTemp = useSelector((state) => state.temperaments)

const [order, setOrder] = useState("");
const [orderr, setOrderr] = useState("");

useEffect (()=> {                                     
    dispatch(getDogs());                             
},[dispatch])

useEffect(()=>{
    dispatch(getTemperaments())
},[]);

function Click(e) {
    e.preventDefault();
    dispatch(getDogs());                                 
}

function FilterCreated(e) {                        
    e.preventDefault();                              
    dispatch(filterDogsCreated(e.target.value));    
}                                                  

function FilterByTemp(e){
  e.preventDefault();
  dispatch(filterDogTemp(e.target.value));
}

function OrderByName(e) {
    e.preventDefault();
    dispatch(orderbyName(e.target.value));
    setCurrentPage(1);                               
    setOrder(`Ordenado ${e.target.value}`);          
}                                                   

function OrderByWeight(e) {
    e.preventDefault();
    dispatch(orderbyWeight(e.target.value));
    setCurrentPage(1);
    setOrderr(`Ordenado ${e.target.value}`);   
}






return (
    <div className="conteiner"> 

      <div className="hether-conteiner">
      <section className="conteiner-info">
          <NavLink to ="/info">
              
                  <button className="info">Abaout this project</button>
              
              </NavLink>
      </section>


        <div className="position-shearchBar">

          <SearchBar /> 
          </div>
          

          <div className="position-create-button">
          
            
          <Link to="/dog"><button className="createButton" >Create dog</button></Link>
          </div>
      </div>
    <hr className="line"/>
    <div className="titleApp">
        <h1> Dogs app </h1>
        </div>
     <div className="filterContainer"> 
            <div>
            {/* <h5>Order by Name:</h5> */}
            <select className="select" onClick={(e) => OrderByName(e)}>
            <option >Order by Name</option>
              <option value="Asc">From A to Z</option>
              <option value="Desc">From Z to A</option>
            </select>
          </div>
          <div>
           {/*  <h5>Order by weight:</h5> */}
            <select  className="select" onClick={(e) => OrderByWeight(e)}>
            <option >Order by Weight</option>
              <option value="small">Small to big</option>
              <option value="big">Big to small</option>
            </select>
            </div>
            <div>
          <select className="select" onClick={(e) => FilterByTemp(e)}>
            <option value="">Filter by Temperament</option>
            {allTemp.map((temp) => (
              <option key={temp.id} value={temp.name}>{temp.name}</option>
            ))}
          </select>
          </div>
          <div>
        <select onClick={(e) => FilterCreated(e)} className="select">
        {/* <option value="Source">Source</option> */}
          <option value="All">All Dogs</option>
          <option value="Created">Created </option>
        </select>
        </div>
          <div>

         
            <button className="select" onClick={(e) => Click(e)}> 
            Refresh 
        </button>


       

            </div>
      
        </div>
        <hr className="line"/>

      <div className="mainContainer">
        { currentDogs?.map( el => {        
                return (
                    <div className="dogContainer">
                      
                    
                      
                      <Link className="a" to={"/dogs/" + el.id}>
                      

                  
                <Card 
                name={el.name} 
                image={el.image} 
             
                temperament={
                    el.temperament
                    ? el.temperament
                    : el.temperaments && el.temperaments.map((temp) => temp.name.concat(" "))
                }
                key={el.id}
                weight={el.weight}
                />
                </Link>
            </div>
          );
            })
        }
        </div>
        
        <section className="paginado">
    
        <Paged
          dogsPerPage= { dogsPerPage }
          allDogs= { allDogs.length }                    
          pagedTotal= { pagedTotal }
        />
              <div className="back-position">
        <Link to="/"><button className="back-button" >Back</button></Link>
        </div>
      </section>
      
    </div>
)
}
// import{
//     GET_DOGS,
//     DOG_DETAIL,
//     GET_DOGS_BY_NAME,
//     GET_TEMPERAMENTS,
//     POST_DOG,
//     FILTER_DOGS_CREATED,
//     FILTER_BY_TEMP,
//     ORDER_BY_NAME,
//     ORDER_BY_WEIGHT
// }from '../actions/index'
const initialState = {
    dogs : [],
    allDogs : [],   
    orderDogs : [],       
    weightDogs : [], 
    temperaments : [],    
    detail : [],          
}



function rootReducer (state = initialState, action) {
    switch(action.type) {

       

        case "GET_DOGS" : 
            return {
               ...state,
               dogs: action.payload,      
               allDogs: action.payload   
            }
        case "DOG_DETAIL" :             
            return {
               ...state,
               detail: action.payload    
            }
        case "GET_DOGS_BY_NAME" :
            return {
               ...state,
               allDogs: action.payload       
            }
        case "GET_TEMPERAMENTS" :
            return {
                ...state,
                temperaments: action.payload
            }
        case "POST_DOG" :          
//         let newDog=state.dogs
//         newDog.push(action.payload) 
// console.log(action.payload)
        return {
                ...state,
            // allDogs: newDog
            } 
        case "FILTER_DOGS_CREATED" :
            let dogsFiltered = state.dogs  
          if ( action.payload === "Created" ){ 
              dogsFiltered=dogsFiltered.filter((dog) => dog.createdInDb)  
          } 
            // dogsFiltered.filter((dog) => !dog.createdInDb);  
            return {               
                ...state,
                allDogs:  dogsFiltered 
            }
        case "FILTER_BY_TEMP":
            const allDogs = state.dogs;
            const filteredDogs = allDogs.filter((el) =>
            el.temperament?.includes(action.payload)
            );
            return {
                ...state,
                allDogs: filteredDogs,
            }
           
        case "ORDER_BY_NAME" :
            const orderDogs = action.payload === "Asc" ?   
            state.allDogs.sort(function(a, b) {               
                if(a.name > b.name) return 1;              
                if(b.name > a.name) return -1;
                return 0;                                   
            }) :                                          
            state.dogs.sort(function(a, b) {
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return 0;
            });
            return {
                ...state,
                allDogs: orderDogs
            };
        case "ORDER_BY_WEIGHT" : 
            const weightDogs = action.payload === "small" ? 
            state.allDogs.sort(function( a, b) {   
            if(typeof action.payload.weight === "string") {         
                if (a.weight > b.weight) return 1                   
                if (a.weight < b.weight) return -1
                return 0;                                           
            } else {                                                
                if (parseInt(a.weight) > parseInt(b.weight)) return 1  
                if (parseInt(a.weight) > parseInt(b.weight)) return -1
                return 0;
            }
            }) :
            
            // const weightDogs2 = action.payload === "Weight 2" ?                                              
            state.allDogs.sort(function(a, b) {                         
                if(typeof action.payload.weight === "string") {
                    if (a.weight < b.weight) return -1
                    if (a.weight > b.weight) return 1
                    return 0;
                } else {
                    if (parseInt(a.weight) > parseInt(b.weight)) return -1
                    if (parseInt(a.weight) < parseInt(b.weight)) return 1
                    return 0
                }
            });
            return {
                ...state,
                dogs: weightDogs
            };
        default: return state;
    }
}




export default rootReducer;
import React from "react";
import  "./Paged.css";

export default function Paged ({ dogsPerPage, allDogs, pagedTotal}) {
  
    const pageNumber = []; 
    const paginado = Math.ceil(allDogs/dogsPerPage);               

    for (let i = 1; i <= paginado; i++) {
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className="paged">                                                     
                {pageNumber?.map(num =>(                                
                   <div className="listContainer" key={num}>
                    <li className="number" key={num}>
                            <a onClick={()=> pagedTotal(num)} className="link">{num}</a>  
                        </li>
                    </div>
                ))}         
            </ul>                                                
        </nav>
    )          
    
    

}





  // let page = currentPage
    // let maxpage= Max.ceil(allDogs.length/dogsPerPage)
    // console.log(maxpage)

    // const array=[]
    // for (let i=1; i<=Math.ceil(allDogs.length/dogsPerPage),i++){
    //     array.push(i)
    // }
    // return(
    //     <>
    //     <h4>paginas</h4>
    //     <div clasname='paginado'>
    //         {page===1 ?
    //         <button type="button" disabled>Next</button>:
    //         <button onClieck={()=>pagePrev(page)}>Prev</button>    
    //     }
    //     {array.map(e=>{
    //         return(
    //             <div key={e}>
    //                 <button onClick={()=>pages(e)}>{e}</button>
    //                 </div>
    //         )
    //     })}
    //     {page===maxpage ?
    //     <button type="button" disabled>Next</button>:
    //     <button onClick={()=>pageNext(page)}>Next</button>    
    // }
    //     </div>
    //     </>
    // )
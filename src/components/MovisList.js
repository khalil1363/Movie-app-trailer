import React from "react";
// import{Data} from "../Data"
import MovisCard from "./MovisCard";
import './Maa.css'
const MovisList=({textSearsh, movies,Ratesh})=>{
    
    return(
        <div className="mm" >
            {movies
            .filter(
                (e)=>
                Ratesh === 0 ?
                e.Title.toLowerCase().includes(textSearsh.toLowerCase()):
                Number(e.rating) === Ratesh && e.Title.toLowerCase().includes(textSearsh.toLowerCase())
            )
            .map((movie)=>( <MovisCard movie={movie} key={movie.id}/> )
               )
            }
        </div>
    )
}
export default MovisList;
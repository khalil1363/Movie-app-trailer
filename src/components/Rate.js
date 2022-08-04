import React from "react";
const Rate=({rating,setRate})=>{    
const starArray=[]
const starRate=(x)=>{
    for(let i=1;i<=5;i++)
    {
        if(i<=x){
            starArray.push(
                <span key={i} onClick={()=>setRate(i)}> ⭐ </span>
            )
        }
        else
        {starArray.push(<span key={i} onClick={()=>setRate(i)} style={{zoom:1.5,}} > ☆ </span>)}
    }
    return starArray;
}
    return(
        <div>
            {starRate(rating)}
        </div>
    )
}
export default Rate
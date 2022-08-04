import React from "react";
import { Card,Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom"

const MovisCard=({movie})=>{
return(
    <div>
    <Card style={{hight:'20', width: '20rem'}}>
    <Card.Img variant="top" src={movie.img} />
    <Card.Body>
      <Card.Title><h2>{movie.Title}</h2></Card.Title>
      <Card.Text >
        {movie.descripiton}
      </Card.Text>
      <ReactStars
  count={5}
  size={24}
  color2={'#ffd700'}
  value={movie.rating}
  edit={false} />
  <Link to={`${movie.id}`}>
      <Button variant="primary">Trailler</Button>
      </Link>
    </Card.Body>
  </Card> 
  </div>
)
}
export default MovisCard;
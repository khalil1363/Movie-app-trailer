import React from "react";
import { Navbar,Container,Nav,Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

import AddMovis from "./AddMovis";

const NavBar=({setTextSearsh ,setRatesh,setMovies,movies,Ratesh})=>{
  const ratingChanged = (newRating) => {
    setRatesh(newRating);
  };

  return(
        <div className="nav"   >
<Navbar  expand="lg" style={{backgroundColor: 'blue'}}>
      <Container fluid>
        <Navbar.Brand href="#">MovisList</Navbar.Brand>
        <Navbar.Toggle aria-controls="MovisList" />
        <Navbar.Collapse id="MovisList">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e=>setTextSearsh(e.target.value)}
            />
           
          </Form>
        </Navbar.Collapse>
      </Container>
    <div  style={{marginLeft:'50px', width:'500px', display:'flex', flexDirection:'column', justifyContent:'space-around' ,}}>
      <ReactStars  
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    value={Ratesh}
  />,
  </div>
   <AddMovis setMovies={setMovies} movies={movies} />
    </Navbar>
   
</div>
    )
}
export default NavBar
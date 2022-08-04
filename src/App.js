import { useState } from 'react';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MovisList from './components/MovisList';
import NavBar from './components/NavBar';
import Trailler from './components/Trailler';
import { Data } from './Data';

function App() {
  const [movies,setMovies]=useState(Data)
  const [Ratesh,setRatesh]=useState(0)
  // const [movieName, setMovieName] = useState(Data)
  const[textSearsh,setTextSearsh]=useState("")
  return (

    <div style={{ backgroundColor: 'grey'}}>
            <Routes>
           <Route  path="/" element={
            <div >
      <NavBar setTextSearsh={setTextSearsh} setRatesh={setRatesh} movies={movies} setMovies={setMovies} Ratesh={Ratesh}/>
    <MovisList   movies={movies} textSearsh={textSearsh} Ratesh={Ratesh} />
    </div> } />

<Route path="/:id" element={<Trailler  movies={movies}/>}/>
</Routes>
</div>
);
}

export default App;

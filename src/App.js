import React, { useState } from 'react';
import {moviesData} from './components/Data';
import './App.css';
import MovieList from './components/MovieList';
import FilterMovie from './components/FilterMovie';
import AddMovie from './components/AddMovie';

function App() {
  const[movies,setMovies]=useState(moviesData)
  const add =(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  const [inputsearch,setInputsearch]=useState("")
  const[inputRate,setInputRate]=useState(0)
  return (
    <div className="App">
      <FilterMovie inputsearch={inputsearch} setInputsearch={setInputsearch} inputRate={inputRate} setInputRate={setInputRate} />
     <MovieList movies={movies} inputsearch={inputsearch} inputRate={inputRate}/>
     <AddMovie add={add}/>
    </div>
  );
}

export default App;

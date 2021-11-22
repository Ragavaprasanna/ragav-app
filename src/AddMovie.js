import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from 'react-router-dom';


export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory()
  const setMovieName = (event) => setName(event.target.value);
  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
    setTrailer("");


  };
  const addMovie = () => {
    console.log({ name, poster, rating, summary,trailer });
    const newMovie = { name, poster, rating, summary,trailer };
    /*setMovies([...movies, newMovie]);*/
    
    fetch("https://6189d26b34b4f400177c426e.mockapi.io/movies", {
      method: "POST",
      body:JSON.stringify(newMovie),
      headers: { 'Content-Type': 'application/json'}
  })
  .then(() => {history.push('/movies') ; resetMovieForm(); })
  


  };

    return (<div className="add-movie-form">
        <TextField value={name} onChange={setMovieName} label="Name" variant="outlined" />
        <TextField value={poster} onChange={event => setPoster(event.target.value)} label="Poster-Url" variant="outlined" />
        <TextField value={rating} onChange={event => setRating(event.target.value)} label="Rating" variant="outlined" />
        <TextField value={summary} onChange={event => setSummary(event.target.value)} label="Summary" variant="outlined" />
        <TextField value={trailer} onChange={event => setTrailer(event.target.value)} label="Trailer" variant="outlined" />




        <Button onClick={addMovie} variant="contained">Add movie</Button>

      </div>);
}




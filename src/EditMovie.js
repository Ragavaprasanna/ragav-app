import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useEffect}  from "react";
import { useHistory,useParams}  from "react-router-dom";


export function EditMovie() {
    const {id} = useParams();
   
    const [movie, setMovie] = useState(null);

  useEffect(()=> {
    fetch("https://6189d26b34b4f400177c426e.mockapi.io/movies/" + id)
.then((data) => data.json())
.then((mv) => setMovie(mv));
  },[]);
    /*const movie  = movies[id];*/
    console.log(id,movie);
  
 
  


    return movie ? <EditMovieForm movie={movie} /> :"";
    
}

function  EditMovieForm({movie}){
  const  history = useHistory();
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const setMovieName = (event) => setName(event.target.value);

  const editMovie = () => {
    {/*console.log({ name, poster, rating, summary,trailer });*/}
    const updateMovie = { name, poster, rating, summary,trailer };
   /*const copyMovies = [...movies];
   copyMovies[id] = updateMovie;
   setMovies(copyMovies);
   history.push("/movies")*/

   fetch("https://6189d26b34b4f400177c426e.mockapi.io/movies/" + movie.id, {
      method: "Put",
      body:JSON.stringify( updateMovie),
      headers: { 'Content-Type': 'application/json'}
  })
  .then(() => {history.push('/movies') ; 
 })
    


  };
  return <div className="add-movie-form">
  <TextField value={name} onChange={setMovieName} label="Name" variant="outlined" />
  <TextField value={poster} onChange={event => setPoster(event.target.value)} label="Poster-Url" variant="outlined" />
  <TextField value={rating} onChange={event => setRating(event.target.value)} label="Rating" variant="outlined" />
  <TextField value={summary} onChange={event => setSummary(event.target.value)} label="Summary" variant="outlined" />
  <TextField value={trailer} onChange={event => setTrailer(event.target.value)} label="Trailer" variant="outlined" />




  <Button onClick={editMovie} variant="contained"color="success">Save</Button>

</div>
}




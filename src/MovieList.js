



/*export function MovieList({movies, setMovies}) {
  

  return (
    <section>
      
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie 
          key={index} 
          name={mv.name} 
          poster={mv.poster} 
          rating={mv.rating} 
          summary={mv.summary} 
          id={index}
          setMovies={setMovies}
          movies={movies}

          />

        ))}
      </div>
    </section>
  );

}*/
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Movie } from './Movie';
import { useHistory } from 'react-router-dom';
import { useState,useEffect}  from "react";

export function MovieList({}) {
  const history = useHistory()
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch("https://6189d26b34b4f400177c426e.mockapi.io/movies", {
      method: "GET",
  })
    .then((data) => data.json())
.then((movies) => setMovies(movies));

  };
  const deleteMovie = (id) => {
    fetch("https://6189d26b34b4f400177c426e.mockapi.io/movies/" + id,
    {
      method: "DELETE",
    }
    ).then(() => getMovies());

  };
  useEffect(getMovies,[]);

 
    

 

  return (
    <section>
      
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie 
          key={index} 
          name={mv.name} 
          poster={mv.poster} 
          rating={mv.rating} 
          summary={mv.summary} 
          id={mv.id}
         DeleteMovieButton={<IconButton className="movie deletion" onClick={() => deleteMovie(mv.id)}
          /*console.log(index,movies);
          const remainingMovies = movies.filter((mv,idx) => idx !== index);
          console.log(remainingMovies);
          setMovies(remainingMovies);*/
         
          

        
          color="error" aria-label="Delete movie">
          <DeleteIcon />
              



            </IconButton>}
             EditMovieButton={<IconButton style={{marginLeft:"auto"}} className="movie deletion" onClick={() => history.push("/movies/edit/" + mv.id)}
              
              
    
            
              color="secondary" aria-label="Edit movie">
              <EditIcon />
                  
    
    
    
                </IconButton>}
          />

        ))}
      </div>
    </section>
  );

}

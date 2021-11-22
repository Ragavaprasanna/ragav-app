import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';

export function MovieDetails() {
  const { id } = useParams();
  /*const movie  = movies[id];*/
  const history = useHistory();

  /*console.log(id,movies,movie);*/
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://6189d26b34b4f400177c426e.mockapi.io/movies/" + id)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  return <div>

    <iframe width="100%" height="570" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="movie-detail-container">
      <div className="specs">
        <h3 className="movie-name">{movie.name}

        </h3>
        <p className="movie-rating">⭐{movie.rating}</p>
      </div>

      <p>{movie.summary}</p>
      <Button variant="outlined" onClick={() => history.goBack()} startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>
    </div>
  </div>;
}

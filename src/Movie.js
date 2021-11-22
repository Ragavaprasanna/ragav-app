import InfoIcon from '@mui/icons-material/Info';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';


import { useState } from "react";
import { Counter } from './Counter';
import { useHistory } from 'react-router-dom';


export function Movie({ name, poster, rating, summary,id,DeleteMovieButton,EditMovieButton }) {
  const [show, setShow] = useState(true);
  const history = useHistory()
  /*const styles={display: show ? "block":"none"};*/
  return (
    <Card className="movie-container">

      <img className="movie-poster"
        src={poster}
        alt={name} />
      <CardContent>
        <div className="specs">
          <h3 className="movie-name">{name}
            <IconButton className="movie-show-button" onClick={() => history.push("/movies/" + id)} color="primary" aria-label="Movie details">
              


            <InfoIcon />
            </IconButton>
            <IconButton className="movie-show-button" onClick={() => setShow(!show)} color="primary" aria-label={show ? "Hide" : "Show"}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}



            </IconButton>
          </h3>
          <p className="movie-rating">⭐{rating}</p>
        </div>

        {/*<button onClick={() =>setShow(!show)} className="movie-show-button">
            {show ? "Hide":"Show"} description
          </button>*/}
        {/*<p style={styles}>
             {summary}
           </p>*/}
        {show ? <p>{summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />
        {EditMovieButton}
        {DeleteMovieButton}
        
        
      </CardActions>
    </Card>
  );
}

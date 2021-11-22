import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailIcon from '@mui/icons-material/Mail';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


import { useState}  from "react";
import Confetti from 'react-confetti'
import { Switch, Route, Link,Redirect,useHistory } from "react-router-dom";
import { AddMovie}  from "./AddMovie";

import './App.css';
import { MovieList } from "./MovieList";
import { ColorList }  from './ColorList';
import {EditMovie}  from "./EditMovie";
import { BasicForm } from './BasicForm';
import { MovieDetails } from './MovieDetails';
import useWindowSize from 'react-use/lib/useWindowSize'


import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';





function App() {
  const users = [
  ];
  
  
  /*const [movies, setMovies] = useState([]);*/

  const [mode, setMode]=useState("dark")
  const  history = useHistory();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  /*useEffect(()=> {
    fetch("https://6189d26b34b4f400177c426e.mockapi.io/movies")
.then((data) => data.json())
.then((movies) => setMovies(movies));
  },[])*/
 return (
  <ThemeProvider theme={theme}>
    <Paper style={{minHeight:"100vh"}} elevation={4}>
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button startIcon={<HomeIcon />} onClick={() => history.push("/")}color="inherit">Home</Button>
          <Button  startIcon={<TheatersIcon />}onClick={() => history.push("/movies")}color="inherit">Movies</Button>
          <Button  startIcon={< AddIcon />}onClick={() => history.push("/movies/add")}color="inherit">Add Movies</Button>
          <Button startIcon={<ColorLensIcon/>} onClick={() => history.push("/color-game")}color="inherit">Color Game</Button>
          <Button startIcon={<ColorLensIcon/>} onClick={() => history.push("/tic-tac-toe-game")}color="inherit">Tic Tac Toe </Button>
          <Button startIcon={< AddIcon />} onClick={() => history.push("/form")}color="inherit">Form </Button>
          <Button  startIcon={mode == "light" ? <Brightness4Icon/> : <Brightness7Icon />}onClick={()=>setMode(mode =="light"? "dark" :"light")} style={{marginLeft:"auto"}}color="inherit">{mode =="light"? "dark" :"light"} Mode</Button>
        </Toolbar>
      </AppBar>
    </Box>


        <Switch>
        <Route exact path="/">
        <Welcome />
       
        </Route>
      {/* /movies */}
      <Route path="/flims">
        <Redirect to="/movies" />
      <MovieList />
      </Route>
      <Route path="/movies/add">
      <AddMovie  />
      </Route>
      <Route path="/movies/edit/:id">
     <EditMovie  />
      </Route>
      <Route path="/movies/:id">
      <MovieDetails  />
      </Route>
      <Route path="/movies">
      <MovieList />
      </Route>
      {/* /color-game */}
      <Route path="/color-game">
       <ColorList />
       </Route>
       <Route path="/tic-tac-toe-game">
     <TicTacToe />
       </Route>
       <Route path="/form">
     <BasicForm />
       </Route>
       {/* / */}
       
        <Route path="**">
        < NotFound />
        </Route>
    
     
   </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}
function NotFound(){
  return <div>
    
    <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="404 Not found" />
  </div>
}
function Welcome(){
  return <h1>Welcome to Ragav App 😜 </h1>
}
function TicTacToe(){
  return<Game />
}
function Game(){
  



  const { width, height } = useWindowSize()
 
    
  

  const [board,setBoard]= /*useState([0,1,2,3,4,5,6,7,8,]);*/
  useState([null,null,null,null,null,null,null,null,null]);
  const decideWinner=board =>{
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];

      if(board[a]!=null && board[a]==board[b]&& board[a]==board[c]){
        console.log("Winner",board[a]);
        return board[a];

      }
    }
    return null;
  };
 const Winner= decideWinner(board);
  const[isXTurn,setIsXTurn]= useState(true);
  const handleClick=(index)=>{
console.log(index);
if(!Winner && !board[index]){
const boardCopy=[...board];

boardCopy[index]=isXTurn  ? "X" : "O";

setBoard(boardCopy);
setIsXTurn(!isXTurn);
}
  };
  const restart = () => {
    setBoard([null,null,null,null,null,null,null,null,null]);
    setIsXTurn(true);
  };
  return ( 
  <div className="full-game">
   {Winner ? <Confetti
      width={width}
      height={height} gravity={0.03}
    />:""}
  <div className="board">
    {board.map((val,index)=>( ( <GameBox val={val} onPlayerClick={()=>handleClick(index)} />)))}
    </div>
    
      {Winner  ? <h1>Winner is :{Winner}</h1>:""}
      <button onClick={restart}>Restart</button>
    
  </div>
  
  );
}
function GameBox({val,onPlayerClick}){
  /*const [value,setValue] = useState(val);*/
  const styles = {color: val=="X" ? "green":"red"};
  return <div style={styles}  
  /*onClick={()=> setValue(value=="X" ? "O" :"X")} */
  onClick={onPlayerClick}
  className="game-box">{val}</div>
}

  export default App;
  
 
  
  




import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { ColorBox } from "./ColorBox.js";

 export function ColorList() {

  const [color, setcolor] = useState("orange");
  const styles = { backgroundColor: color, color: 'black' };
  const INITIAL_COLORS = ["crimson", "orange", "skyblue", "black"];
  const [colors, setColors] = useState(INITIAL_COLORS);
  return (
    <div>


      <TextField value={color} style={styles} onChange={(event) => setcolor(event.target.value)}
        placeholder="Enter a color" label="Enter  a color" variant="outlined" />
      <Button onClick={() => setColors([...colors, color])} variant="contained">Add  color</Button>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}

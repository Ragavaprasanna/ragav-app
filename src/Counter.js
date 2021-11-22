import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import {useEffect, useState } from "react";

export function Counter() {
  //const like = 0;
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);

  useEffect(()=>{
    console.log("like is changed: ",like);
  });

  return (

    <div>
      <IconButton className="like-dislike" onClick={() => setlike(like + 1)} color="primary" aria-label="upload picture">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton className="like-dislike" onClick={() => setdislike(dislike + 1)} color="primary" aria-label="upload picture">
        <Badge badgeContent={dislike} color="error">
          👎

        </Badge>
      </IconButton>



    </div>

  );
}

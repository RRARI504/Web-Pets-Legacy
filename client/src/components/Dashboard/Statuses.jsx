import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";


const Status = () => {
  const [state, setState] = useState({
    mood: 0,
    love: 0,
    health: 0
  });

  useEffect(() => {
    // send the get request here
    axios.get('/pet')
      .then((res) => {
        // so we should have one document following the session
        setState({
          mood: res.data.mood,
          love: res.data.love,
          health: res.data.health
        });
      })
      .catch((err) => {
        console.error(err);
      });
  });




  // html
  return (
    <div>
      <span> Mood: {state.mood} </span>
      <span> Love: {state.love} </span>
      <span> Health: {state.health} </span>
    </div>
  );
};

export default Status;
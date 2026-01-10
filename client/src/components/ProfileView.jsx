import React, { useState, useEffect } from 'react';
import axios from 'axios';





const ProfileView = ({pet}) => {
  //state of pet detail
  const [petDetails, setPetDetails] = useState(null);
  //view triggers READ to the pet by id
  useEffect(() =>{
    if(!pet){
      return;
    }
    //fetches latest data
    axios.get(`/pet/${pet._id}`)
    .then((res) =>{
      //set state of pet details
      setPetDetails(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [pet])


  if(!petDetails){
    return <p>LOADING</p>
  }




  return (
     <div className="border-2 border-black p-[10px]">
      <p><strong>Name:</strong> {petDetails.name}</p>
      <p><strong>Mood:</strong> {petDetails.mood}</p>
      <p><strong>Love:</strong> {petDetails.love}</p>
      <p><strong>Health:</strong> {petDetails.health}</p>
      <p><strong>Hunger:</strong> {petDetails.hunger}</p>

      <h4>Training</h4>
      <ul>
        {petDetails.training.map(skill => (
          <li key={skill.name}>
            {skill.name}: {skill.stat}
          </li>
        ))}
      </ul>
    </div>
  );


}

export default ProfileView;

import React from 'react';

function Skill(props) {
  const { name } = props.skill;

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default Skill;

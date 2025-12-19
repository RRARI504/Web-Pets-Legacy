import React from 'react';

import Skill from './Skill';

function SkillDashboard(props) {



  return (
    <div>
      <h4>Skill Dashboard</h4>
      {props.skillData.map((skill) => <Skill key={skill.name} skill={skill} />)}
    </div>
  );
}

export default SkillDashboard;

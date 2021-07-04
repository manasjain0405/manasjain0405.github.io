import React from 'react';
import "./About.css";

function About(props) {
  const item = props.dataParentToChild;
  return (
    <div className="dark about-box">
        <h1>About Me</h1>
        <p>{item.bio}</p>
    </div>
  );
}

export default About;

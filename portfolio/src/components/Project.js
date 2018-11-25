import React from 'react';

const Project = (props) => (
    <div>
      <h2>Project {props.match.params.id}</h2>
      <p>some random stuff ive done</p>
    </div>
);

export default Project;
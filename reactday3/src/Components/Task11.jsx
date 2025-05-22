import React from 'react';

const Task11 = () => {
  const isCool = true; 

  return (
    <div>
        <h4>Task-11</h4>
      {isCool && <div>React is Cool!</div>}
    </div>
  );
};

export default Task11;
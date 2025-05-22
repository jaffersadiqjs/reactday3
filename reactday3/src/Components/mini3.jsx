import React, { useState } from 'react';

const ShowHideTextComponent = () => {
  const [showText, setShowText] = useState(true);

  const handleToggle = () => {
    setShowText(!showText);
  };

  return (
    <div>
      {showText && <p>Hello, World!</p>}
      <button onClick={handleToggle}>
        {showText ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default ShowHideTextComponent;


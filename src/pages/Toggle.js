import React, { useState } from 'react';


const ToggleClassExample = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button onClick={toggleClass}>
        Toggle Class
      </button>
      <div className={isActive ? 'active' : ''}>
        This div's class will be toggled.
      </div>
    </div>
  );
};

export default ToggleClassExample;

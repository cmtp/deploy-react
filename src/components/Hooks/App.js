import React, { useState } from 'react';
import Seconds from './Seconds';

const AppHooks = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <h1>Contador</h1>
      <button type="button" onClick={() => setShowTimer(!showTimer)}>
        {!showTimer ? 'Start Timer' : 'Stop Timer'}
      </button>
      {!showTimer ? <div className="alert alert-danger">Off</div> : <div className="alert alert-success">Started! <Seconds /></div>}
    </>
  );
};

export default AppHooks;

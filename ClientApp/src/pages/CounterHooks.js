import React, { useState } from "react";

export const CounterHooks = () => {
  // use state to create a state `count` and the function to update
  // that state that is similar to this.setState
  // except it doesn't have  to be an option
  const [count, updateCounter] = useState(0);

  return (
    <div>
      <h1>Counter with Hooks</h1>
      <p>This is a simple example of a React component.</p>
      <p>
        Current count: <strong>{count}</strong>
      </p>
      <p>
      <button 
        className="btn btn-primary"
        // use our update counter function
        onClick={() => updateCounter(count + 1)}>
        Increment
      </button>
      </p>
      <p>
      <button 
        className="btn btn-primary"
        // use our update counter function
        onClick={() => updateCounter(count - 1)}>
        Decrement
      </button>
      </p>
    </div>
  );
};

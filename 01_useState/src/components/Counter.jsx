import React, { useState } from "react";

// useState is a hook in React that allows you to add state management to functional components.

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div className="flex justify-center items-center gap-4">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
};
export default Counter;

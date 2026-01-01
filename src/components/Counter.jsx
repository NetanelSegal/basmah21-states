import { useState } from 'react';

const srcs = ['img1', 'img2', 'img3'];

function Counter() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div>
      <h2>Counter state</h2>
      <p>{number}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <h4>{srcs[number % srcs.length]}</h4>
    </div>
  );
}

export default Counter;

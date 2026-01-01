import { useState } from 'react';

const strings = [
  'Apple',
  'Banana',
  'Orange',
  'Hamutzim',
  'Grapes',
  'Strawberry',
];

function ArrayState() {
  const [fruits, setFruits] = useState(strings);

  return (
    <div>
      <h2>ArrayState</h2>
      {fruits.map((f, i) => (
        <DisplayFruit fruit={f} index={i} />
      ))}
      <button
        onClick={() => {
          const s = prompt('Enter new string');
          setFruits([...fruits, s]);
        }}
      >
        add
      </button>
    </div>
  );
}

function DisplayFruit(props) {
  return (
    <div>
      <h4>Fruit {props.index}:</h4>
      <p>{props.fruit}</p>
    </div>
  );
}

export default ArrayState;

import { useState } from 'react';

function ObjectState() {
  const [user, setUser] = useState({});

  function onClickGenerate(key) {
    return () => {
      const value = prompt(`enter ${key}`);
      setUser({
        ...user,
        [key]: value,
      });
    };
  }

  return (
    <div>
      <h2>ObjectState</h2>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.city}</p>
      <button onClick={onClickGenerate('name')}>enter name</button>
      <button onClick={onClickGenerate('city')}>enter city</button>
      <button onClick={onClickGenerate('age')}>enter age</button>
    </div>
  );
}

export default ObjectState;

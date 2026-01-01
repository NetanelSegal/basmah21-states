import { useState } from 'react';

function Boolean() {
  console.log('Boolean rendered');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Boolean</h2>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Toggle
      </button>
      {isOpen && <Modal />}
      <Other />
    </div>
  );
}

function Other() {
  console.log('Other rendered');
  return <p>other</p>;
}

function Modal() {
  console.log('Modal rendered');
  return (
    <div
      style={{
        border: '2px solid black',
        borderRadius: 12,
        padding: 20,
      }}
    >
      <h3>this is a modal</h3>
    </div>
  );
}
export default Boolean;

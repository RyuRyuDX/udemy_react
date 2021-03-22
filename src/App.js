import React from 'react';

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Onose />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

const Onose = () => {
  return <div>Im Onose.</div>
}

export default App;

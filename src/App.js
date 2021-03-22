import React from 'react';

const App = () => {
  return (
    <div>
      <User name={"Taro"} age={10} />
      <User name={"Ryusuke"} age={26} />
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name} and {props.age} </div>
}



export default App;

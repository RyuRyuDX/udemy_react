import React from 'react';
import PropTypes from 'props-types';

const App = () => {
const profiles = [
  { name: "Taro", age: 10 },
  { name: "Onose", age: 26 },
  { name: 1 },
]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name} and {props.age} </div>
}

User.propsTypes = {
  name: PropTypes.string
}

export default App;

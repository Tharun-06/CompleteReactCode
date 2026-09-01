import React, {useState, useEffect} from 'react'
import Greeting from './Greeting'

export default function App() {
  // name = "Aishwarya"
  let[name, setName]= useState("Aishwarya");
  const [count, setCount] = useState(0);
  const update = () => {
    setName("Ramu");
  }

//USEEffect is used to perform side effects in functional components. 
// It can be used to fetch data, directly update the DOM, and timers. 
// useEffect accepts two arguments. The second argument is optional.
useEffect(() => {
  if (count >= 50) {
    return;
  }
  const timer = setTimeout(() => {
    setCount(count + 1);
  }, 1000);
  return () => clearTimeout(timer);
},[count]);
  const Inc = () => {
    setCount(count + 1);
  }
  const Dec = () => {
    setCount(count - 1);
  }
  const Zero = () => {
    setCount(0);
  }
  // let age = 20;
  // const skill = ["React", "Java", "Python"];

  return (
    <div>
      <h1>Welcome to {name}</h1>
      <button onClick = {update}>change Name</button>
      
      <h1>Count value is {count}</h1> 
      <button onClick = {Inc}>increase </button>
      <button onClick = {Dec}>decrease </button>
      <button onClick = {Zero}>reset </button>
      {/* <Greeting name = "Aishwarya" 
      age = {age}
      items = {skill}/> */}
    </div>
  );
}

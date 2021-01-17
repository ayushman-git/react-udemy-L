import { useState } from "react";

const Person = (props) => {
  const [ageState, setAgeState] = useState({
    age: 30,
  });
  const clickHandler = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <strong>Random {props.title}:</strong> {Math.floor(Math.random() * 100)}
      <p>Age: {ageState.age}</p>
      <button onClick={clickHandler}>Click</button>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;

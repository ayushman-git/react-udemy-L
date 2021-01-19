import { useState } from "react";
import "./Person.css";

const Person = (props) => {
  const [ageState, setAgeState] = useState({
    age: 30,
  });

  const clickHandler = () => {
    setAgeState({
      age: Math.floor(Math.random() * 20),
    });
  };

  const buttonStyle = {
    borderRadius: "20px",
    padding: "1em",
    backgroundColor: "black",
    color: "white",
    outline: "none",
    border: "none",
  };

  return (
    <div className="Person">
      <strong onClick={props.click}>Random {props.title}:</strong>{" "}
      {Math.floor(Math.random() * 100)}
      <p>Age: {ageState.age}</p>
      <input type="text" onChange={props.change} />
      <button style={buttonStyle} onClick={clickHandler}>
        Click
      </button>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;

import { useState } from "react";
import "./Person.css";
import Radium from "radium";

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
    borderRadius: "7px",
    padding: "1em",
    backgroundColor: "black",
    color: "white",
    outline: "none",
    border: "none",
    transition: "all 0.2s ease",
    ":hover": {
      backgroundColor: "white",
      color: "black",
      borderRadius: "10px",
    },
  };

  return (
    <div className="Person">
      <strong onClick={props.click}>Random {props.title}:</strong>{" "}
      {Math.floor(Math.random() * 100)}
      <p className="Person-strong">Age: {ageState.age}</p>
      <input type="text" onChange={props.change} value={props.title} />
      <button style={buttonStyle} onClick={clickHandler}>
        Click
      </button>
      <p>{props.children}</p>
    </div>
  );
};

export default Radium(Person);

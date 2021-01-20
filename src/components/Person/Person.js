import { useState } from "react";
import styles from "./Person.module.css";
import Radium from "radium";

const Person = (props) => {
  const [ageState, setAgeState] = useState({
    age: 30,
  });
  const [addClass, setAddClass] = useState(false);

  const clickHandler = () => {
    setAgeState({
      age: Math.floor(Math.random() * 20),
    });
  };

  const classHandler = () => {
    setAddClass(!addClass);
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

  throw new Error();

  return (
    <div className={styles.Person}>
      <strong onClick={props.click}>Random {props.title}:</strong>{" "}
      {Math.floor(Math.random() * 100)}
      <p className={styles.para}>Age: {ageState.age}</p>
      <input type="text" onChange={props.change} value={props.title} />
      <button style={buttonStyle} onClick={clickHandler}>
        Click
      </button>
      <button onClick={classHandler} className={addClass ? styles.btn : null}>
        Using CSS class
      </button>
      <p>{props.children}</p>
    </div>
  );
};

export default Radium(Person);

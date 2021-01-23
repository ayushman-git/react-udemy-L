import React, { useState, useEffect, useRef } from "react";
import styles from "./Person.module.css";
import WithPerson from "../../../hoc/WithPerson";
import RandomContext from "../../../../context/randomContext";

const Person = (props) => {
  const strongRef = useRef();
  const strongClick = () => {
    props.click();
    console.log(strongRef);
  };
  console.log(strongRef);
  useEffect(() => {
    return () => {
      console.log("Person.js | useEffect | runs before component unmounts");
    };
  });

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

  const contextFunc = () => {
    console.log("ADAWDf");
  };

  // throw new Error();

  return (
    <RandomContext.Consumer>
      {(context) => (
        <WithPerson name={styles.Person}>
          <strong ref={strongRef} onClick={strongClick}>
            Random {props.title}:
          </strong>{" "}
          {Math.floor(Math.random() * 100)}
          <p className={styles.para}>Age: {ageState.age}</p>
          <input type="text" onChange={props.change} value={props.title} />
          <button style={buttonStyle} onClick={clickHandler}>
            Click
          </button>
          <p>{context.randomBool}</p>
          <button
            onClick={classHandler}
            className={addClass ? styles.btn : null}
          >
            Using CSS class
          </button>
          <p>{props.children}</p>
        </WithPerson>
      )}
    </RandomContext.Consumer>
  );
};

export default React.memo(Person);

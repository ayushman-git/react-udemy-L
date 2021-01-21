import { useEffect } from "react";

const Cockpit = (props) => {
  const style = {
    borderRadius: "7px",
    padding: "1em",
    backgroundColor: "green",
    color: "white",
    outline: "none",
    border: "none",
  };

  useEffect(() => {
    console.log("Cockpit | useEffect");
  });

  if (props.showPerson) {
    style.backgroundColor = "red";
  }
  console.log("Cockpit | rendering");
  return (
    <>
      <h1>{props.title}</h1>
      <button style={style} onClick={props.togglePerson}>
        Click
      </button>
    </>
  );
};

export default Cockpit;

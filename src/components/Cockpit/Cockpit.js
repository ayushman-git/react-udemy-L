const Cockpit = (props) => {
  const style = {
    borderRadius: "7px",
    padding: "1em",
    backgroundColor: "green",
    color: "white",
    outline: "none",
    border: "none",
  };

  if (props.showPerson) {
    style.backgroundColor = "red";
  }

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

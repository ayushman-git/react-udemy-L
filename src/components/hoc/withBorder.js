const withBorder = (ChildComponent, padding) => {
  const style = {
    padding: padding + "em",
    border: "10px solid black",
  };
  return (props) => (
    <div style={style}>
      <ChildComponent />
    </div>
  );
};

export default withBorder;

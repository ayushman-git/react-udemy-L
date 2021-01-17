const person = (props) => {
  console.log(props);
  return (
    <p>
      <strong>Random {props.title}:</strong> {Math.floor(Math.random() * 100)}
      <p>{props.children}</p>
    </p>
  );
};

export default person;

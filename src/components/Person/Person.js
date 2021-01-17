const person = (props) => {
  return (
    <div>
      <strong>Random {props.title}:</strong> {Math.floor(Math.random() * 100)}
      <p>{props.children}</p>
    </div>
  );
};

export default person;

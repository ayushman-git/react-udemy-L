const person = (props) => {
  return (
    <p>
      <strong>Random {props.title}:</strong> {Math.floor(Math.random() * 100)}
    </p>
  );
};

export default person;

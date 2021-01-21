import ErrorBoundary from "../../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const Persons = (props) => {
  return (
    <>
      {props.person.map((person, index) => {
        return (
          <ErrorBoundary key={person.id}>
            <Person
              title={person.name}
              click={() => props.delete(index)}
              change={(event) => props.change(event, person.id)}
            />
          </ErrorBoundary>
        );
      })}
    </>
  );
};

export default Persons;

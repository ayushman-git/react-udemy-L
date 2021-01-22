import { Component } from "react";

import ErrorBoundary from "../../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {
  state = {};
  static getDerivedStateFromProps(prop, state) {
    console.log("Persons.js | getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons.js | shouldComponentUpdate");
    if (nextProps.person !== this.prop.person) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js | getSnapshotBeforeUpdate");
    return { something: "Hello" };
  }

  componentDidUpdate(prevProps, prevState, snap) {
    console.log("Persons.js | componentDidUpdate");
    console.log(snap);
  }

  render() {
    return (
      <>
        {this.props.person.map((person, index) => {
          return (
            <ErrorBoundary key={person.id}>
              <Person
                title={person.name}
                click={() => this.props.delete(index)}
                change={(event) => this.props.change(event, person.id)}
              />
            </ErrorBoundary>
          );
        })}
      </>
    );
  }
}

export default Persons;

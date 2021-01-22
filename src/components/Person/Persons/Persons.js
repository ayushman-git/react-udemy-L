import { PureComponent } from "react";

import ErrorBoundary from "../../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {
  state = {};
  static getDerivedStateFromProps(prop, state) {
    console.log("Persons.js | getDerivedStateFromProps");
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Persons.js | shouldComponentUpdate");
  //   //Compare all props or use PureComponent
  //   if (
  //     nextProps.person !== this.props.person ||
  //     nextProps.delete !== this.props.delete ||
  //     nextProps.change !== this.props.change
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

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

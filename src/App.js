import "./App.css";
import React, { Component } from "react";

import Persons from "./components/Person/Persons/Persons";
import Cockpit from "./components/Cockpit/Cockpit";
import withBorder from "./components/hoc/withBorder";
import RandomContext from "./context/randomContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.personRef = React.createRef();
    console.log("App.js | Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App.js | getDerivedStateFromProps");
    return state;
  }
  componentDidMount() {
    console.log("App.js | componentDidMount");
  }
  componentDidUpdate() {
    console.log(this.personRef.current);
    console.log(this.state.keyStrokeCounter);
  }
  state = {
    person: [
      {
        id: "asdasda",
        name: "Ayushman",
        age: 22,
      },
      {
        id: "ASdwadsd",
        name: "XenOn",
        age: 21,
      },
      {
        id: "gawdsdasd",
        name: "Duoro",
        age: 20,
      },
    ],
    showPerson: false,
    keyStrokeCounter: 0,
    randomBool: false,
  };
  boolFlip() {
    this.setState((prevProp) => !prevProp.randomBool);
  }
  changeNameInput = (e, id) => {
    const personIndex = this.state.person.findIndex((el) => el.id === id);
    const persons = [...this.state.person];
    const person = {
      ...this.state.person[personIndex],
    };
    person.name = e.target.value;
    persons[personIndex] = person;

    //use anonymous function when change state requires previous state
    this.setState((prevState, prop) => {
      return {
        person: persons,
        keyStrokeCounter: prevState.keyStrokeCounter + 1,
      };
    });
  };

  delete = (index) => {
    const person = [...this.state.person];
    person.splice(index, 1);
    this.setState({ person: person });
  };

  togglePerson = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  render() {
    console.log("App.js | render");
    let person = null;
    if (this.state.showPerson) {
      person = (
        <Persons
          ref={this.personRef}
          person={this.state.person}
          delete={this.delete}
          change={this.changeNameInput}
        />
      );
    }

    return (
      <div className={this.state.showPerson ? "AppPerson" : "App"}>
        <Cockpit
          title="Person List"
          effect={this.state.person}
          showPerson={this.state.showPerson}
          togglePerson={this.togglePerson}
        />
        <RandomContext.Provider
          value={{ randomBool: this.state.randomBool, boolFlip: this.boolFlip }}
        >
          {person}
        </RandomContext.Provider>
      </div>
    );
  }
}

export default withBorder(App, 2);

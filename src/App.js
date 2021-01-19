import "./App.css";
import React, { Component } from "react";

import Person from "./components/Person/Person";

class App extends Component {
  state = {
    person: [
      {
        name: "Ayushman",
        age: 22,
      },
      {
        name: "XenOn",
        age: 21,
      },
      {
        name: "Duoro",
        age: 20,
      },
    ],
    showPerson: false,
  };

  // nameHandler = (arg) => {
  //   console.log(arg);
  //   this.setState({
  //     person: [
  //       {
  //         name: arg ? arg : "Ayush",
  //         age: 22,
  //       },
  //       {
  //         name: "XenOn",
  //         age: 21,
  //       },
  //       {
  //         name: "Purge",
  //         age: 24,
  //       },
  //     ],
  //   });
  // };

  // changeNameInput = (e) => {
  //   console.log(e);
  //   this.setState({
  //     person: [
  //       {
  //         name: "Ayushman",
  //         age: 22,
  //       },
  //       {
  //         name: e.target.value,
  //         age: 21,
  //       },
  //       {
  //         name: "Purge",
  //         age: 24,
  //       },
  //     ],
  //   });
  // };

  delete = (index) => {
    const person = this.state.person;
    person.splice(index, 1);
    this.setState({ person: person });
  };

  togglePerson = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                key={index}
                title={person.name}
                click={() => this.delete(index)}
              />
            );
          })}
          {/* <Person title={this.state.person[0].name} />
          <Person
            title={this.state.person[1].name}
            click={this.nameHandler.bind(this, "Argument")}
            changed={this.changeNameInput}
          >
            Children prop
          </Person>
          <Person title={this.state.person[2].name} /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.togglePerson}>Click</button>
        {person}
        {/* {this.state.showPerson ? (
          <div>
            <Person title={this.state.person[0].name} />
            <Person
              title={this.state.person[1].name}
              click={this.nameHandler.bind(this, "Argument")}
              changed={this.changeNameInput}
            >
              Children prop
            </Person>
            <Person title={this.state.person[2].name} />
          </div>
        ) : null} */}
      </div>
    );
  }
}

//non-JSX syntax
// return React.createElement(
//   "div",
//   {
//     className: "App"
//   },
//   React.createElement("h2", null, "Using createElement")
// );

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello</h1>
//     </div>
//   );
// }

export default App;

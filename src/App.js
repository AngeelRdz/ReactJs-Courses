import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

class Text extends Component {
  render() {
    const textSegundoBool = this.props.boolean ? "Cierto" : "Falso";
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2);

    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{JSON.stringify(this.props.boolean)}</p>
        <p>{textSegundoBool}</p>
        <p>{this.props.arrayOfNumbers.join(", ")}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Weelcomee" />
        <Text
          arrayOfNumbers={[2, 3, 10]}
          objectWithInfo={{ key: "First Value", key2: "otherValue" }}
          boolean
          number={2}
          text="Texto: "
        />
      </header>
    </div>
  );
}

export default App;

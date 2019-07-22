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
    const {
      boolean,
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props;

    const textSegundoBool = boolean ? "Cierto" : "Falso";
    const mappedNumbers = arrayOfNumbers.map(n => n * 2);
    const mappedNumbersTwo = arrayOfNumbers.map(multiply);

    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{JSON.stringify(this.props.boolean)}</p>
        <p>{textSegundoBool}</p>
        <p>{this.props.arrayOfNumbers.join(", ")}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{objectWithInfo.key}</p>
        <p>New: {mappedNumbersTwo.join(", ")}</p>
        <p>{title}</p>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}

Title.defaultProps = {
  text: "Título por defecto"
};

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: this.props.contadorInicial };
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <span>{this.state.contador}</span><br/><br/>
        <ContadorNumero numero={this.state.contador} />
      </div>
    );
  }
}

Contador.defaultProps = {
  contadorInicial: 0
};

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Hello title="Weelcomee" /> */}
        <Text
          arrayOfNumbers={[2, 3, 10]}
          objectWithInfo={{ key: "First Value", key2: "otherValue" }}
          boolean
          multiply={number => number * 4}
          number={2}
          text="Texto: "
          title={<h1>Este es el titulo</h1>}
        />
        <Title />
        <Contador />
      </header>
    </div>
  );
}

export default App;

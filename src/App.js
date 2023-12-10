import "./App.css";
import { Component } from "react";
import { Mycars } from "./components/Mycars";

class App extends Component {
  state = {
    titre: "Mon catalogue voiture",
    color: "green",
  };

  changeTitle = (e) => {
    this.setState({
      titre: "Mon nouveau titre",
    });
  };

  changeViaParam = (titre) => {
    this.setState({
      titre: titre,
    });
  };

  changeViaBind = (param) => {
    this.setState({
      titre: param,
    });
  };

  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Mycars color={this.state.color} title={this.state.titre} />
        <button onClick={this.changeTitle}>Changer le h1 en dur</button>
        <button onClick={() => this.changeViaParam("titre via un param")}>
          Via param
        </button>
        <button onClick={this.changeViaBind.bind(this, "titre via Bind !")}>
          Via bind
        </button>
        <input
          type="text"
          onChange={this.changeViaInput}
          value={this.state.titre}
        />
      </div>
    );
  }
}

export default App;

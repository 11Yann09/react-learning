import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", color: "red", year: 2022 },
      { name: "Mercedes", color: "black", year: 2021 },
      { name: "Peugeot", color: "green", year: 2018 },
    ],
    titre: "Mon Catalogue Voitures 2",
  };

  addTenYears = (e) => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });

    this.setState({ updatedState });
  };

  getAge = (year) => {
    const now = new Date().getFullYear();
    const age = now - year;
    let frenchYearsStr = "";

    if (age === 1) {
      frenchYearsStr = "an";
    } else if (age === 0) {
      frenchYearsStr = "";
    } else {
      frenchYearsStr = "ans";
    }
    return `${age} ${frenchYearsStr}`;
  };

  render() {
    const year = new Date().getFullYear();

    return (
      <div>
        <h1>{this.state.titre}</h1>

        <button onClick={this.addTenYears}> + 10 ans</button>

        {this.state.voitures.map(({ name, color, year }, index) => {
          return (
            <div key={index}>
              <Car name={name} color={color} year={this.getAge(year)} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Mycars;

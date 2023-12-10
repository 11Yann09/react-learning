import { Component } from "react";
// import Car from "./Cars";
import Wrapper from "./Wrapper";
import MyHeader from "./MyHeader";

const Car = ({ children, color }) => {
  let colorInfo = "";

  if (color) {
    colorInfo = color;
  } else {
    colorInfo = "Néant";
  }

  return (
    children && (
      <Wrapper>
        <p>Marque: {children} </p>
        <p>Couleur: {colorInfo}</p>
        {/*color ? <p>Couleur: {color}</p> : <p>Couleur: Néant</p>*/}
        {/*<p>Couleur :{color ? color : "Néant"}</p>*/}
      </Wrapper>
    )
  );
};

export class Mycars extends Component {
  state = {
    cars: ["Ford", "Mercedes", "Peugeot"],
  };

  noCopy = () => {
    alert("merci de ne pas copier le texte");
  };

  addStyle = (e) => {
    if (e.target.classList.contains("styled")) {
      e.target.classList.remove("styled");
    } else {
      e.target.classList.add("styled");
    }
  };

  render() {
    return (
      <div>
        <Wrapper>
          <MyHeader myStyle={this.props.color} onMouseOver={this.addStyle}>
            {this.props.title}
          </MyHeader>
        </Wrapper>
        <p onCopy={this.noCopy}>
          lorem ipsum,dolor sit amet consectetur adipisicing elit.
        </p>
        <Car color="red">{this.state.cars[0]}</Car>
        <Car color="">{this.state.cars[1]}</Car>
        <Car color="green">{this.state.cars[2]}</Car>
      </div>
    );
  }
}

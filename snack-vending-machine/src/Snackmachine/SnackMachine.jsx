import "./snackmachine.css";
import React, { Component } from "react";
import SnackItems from "./SnackItems";
import CoinsDialog from "./Dialogs/CoinsDialog";
import NotsDialog from "./Dialogs/NotesDialog";
import CreditCard from "./Dialogs/CreditCard";
import axios from "axios";

var count = 0;
class SnackMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: "",
      screeing: "",
      totalMoney: "",
      change: 0,
    };
  }

  getTotal = (number) => {
    console.log("mmmmmm", number);
    this.setState({ totalMoney: number });
  };

  handleChange = (e) => {
    if (count === 2) {
      alert("You can't insert more two numbers , Sorry");
      window.location.reload();
      console.log("you cant");
      console.log(this.state.numbers);
    } else {
      count++;
      let { value } = e.target;
      console.log("here", e.target);
      if (this.state.numbers !== "") {
        const c = this.state.numbers;
        const v = c + "" + value;
        this.setState({ numbers: v });
        console.log("state=", this.state.numbers);
      } else {
        this.setState({ numbers: value });
      }

      console.log(this.state.numbers);
    }
  };

  handelOnClick = async (e) => {
    console.log(this.state);
    e.preventDefault();
    axios
      .post("http://localhost:4000/Items/screenItem", this.state)
      .then((data) => {
        this.setState({ screeing: data.data });
        console.log("here", data.data);
      });
  };

  handelSubmit = async (e) => {
    console.log(this.state);
    e.preventDefault();
    axios
      .post("http://localhost:4000/Items//buyingsnack", this.state)
      .then((data) => {
        this.setState({ change: data.data });
        console.log("check", data.data);
        if (data.data === 0) {
          alert("You should insert correct price  , Please");
        } else if (data.data === 1) {
          alert("Take Your Snack please , Welecom");
          window.location.reload();
        } else {
          console.log("change", Math.round(parseFloat(data.data) * 100));
          alert(
            "Please,Take Your changes " +
              Math.round(parseFloat(data.data) * 100)
          );
        }
      });
  };

  render() {
    const { screeing, totalMoney, change } = this.state;
    const totl = totalMoney + "$";
    const itemss = screeing.item + " " + screeing.price;
    console.log("here2", this.state.screeing.item);

    return (
      <div className="Containor">
        <h4 id="snack-input">Snacks</h4>
        <SnackItems />
        <div id="message">Buy Snacks!</div>
        <input
          id="screen"
          type="text"
          name="screen"
          value={
            "Item:" +
            itemss +
            "$" +
            "   " +
            " total=" +
            totalMoney +
            "$" +
            "   " +
            " change=" +
            change +
            "$"
          }
          readonly
        />
        <div style={{ display: "flex" }}>
          <div id="snack-purchases">
            <h4 id="snack-inputnum">insert snack number</h4>
            <button onClick={this.handleChange} id="num" value="1">
              1
            </button>
            &nbsp;&nbsp;
            <button onClick={this.handleChange} id="num" value="2">
              2
            </button>
            &nbsp;&nbsp;
            <button onClick={this.handleChange} id="num" value="3">
              3
            </button>
            &nbsp;&nbsp;
            <br />
            <br />
            <button onClick={this.handleChange} id="num" value="4">
              4
            </button>
            &nbsp;&nbsp;
            <button onClick={this.handleChange} id="num" value="5">
              5
            </button>
            &nbsp;&nbsp;
            <button onClick={this.handelOnClick} id="ok">
              OK!
            </button>
          </div>
          <div id="pyment-slot">
            <h4 id="snack-input2">Payment way</h4>
            <CoinsDialog getTotal={this.getTotal} className="forButton" />
            <NotsDialog getTotal={this.getTotal} className="forButton" />
            <CreditCard className="forButton" />
          </div>
        </div>
        <button onClick={this.handelSubmit} id="snack-submit">
          Buy Snack
        </button>
      </div>
    );
  }
}
export default SnackMachine;

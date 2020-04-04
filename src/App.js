import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import store from './store'
import action from './actions'

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    const handleWidthdrawl = e => {
      const amount = e.target.dataset.amount
      store.dispatch(action(amount))
    }
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={handleWidthdrawl} data-amount="10000">WITHDRAW $10,000</button>
          <button onClick={handleWidthdrawl} data-amount="5000">WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;

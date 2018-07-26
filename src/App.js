import React, { Component } from 'react';
import web3 from './web3';
import lottery from './lottery';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  };
  
  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const manager = await lottery.methods.getManager().call()
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({
      manager,
      players,
      balance
    });
  }

  onSubmit = async (ev) => {
    ev.preventDefault();
    const accounts = await web3.eth.getAccounts();
    let message = 'Waiting on transaction success...'
    this.setState({ message });
    const res = await lottery.methods.enterLottery()
      .send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
    console.log(res);
    message = res.events.status === '0x0' ?  'Oops, something went wrong. You were not entered' : 'You have been entered!';
    this.setState({ message })
  }

  onPickWinnerClick = async (ev) => {
    ev.preventDefault();
    let message = 'Waiting on transaction success...'
    this.setState({ message });
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    const winner = await lottery.methods.getLastWinner().call();
    console.log(winner);
    message = `The winner is ${winner}`;
    this.setState({ message });
  }

  render() {
    return (
      <div className="app">
        <h1>Lottery Contract</h1>
        <p>
          This contract is manager by {this.state.manager}<br />
          There are currently {this.state.players.length} people entered,<br />
          competing to win {web3.utils.fromWei(this.state.balance)} ether.
        </p>
        <hr />
        <form onSubmit={this.onSubmit}> 
          <h2>Want to try your luck?</h2>
          <div>
            <label>Amount of ether to enter:</label>
            <input 
              value={this.state.value}
              onChange={ev => this.setState({ value: ev.target.value })} />
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <div>
          <h2>Ready to pick a winner?</h2>
          <button onClick={this.onPickWinnerClick}>Pick a winner</button>
        </div>
        <hr />
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default App;

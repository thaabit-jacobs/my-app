import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = 
    {
      conversionRate:
      {
        USD: 
        {
          EUR: 0.91,
          ZA: 15.04,
          USD: 1.00
        },
        ZA: 
        {
          EUR: 0.060,
          USD: 0.066,
          ZA: 1.00
        },
        EUR: 
        {
          ZA: 16.54,
          USD: 1.10,
          EUR: 1.00
        }
      },

      from: "USD",
      to: "ZA",

      amount: 1.00
    }

    this.onChangeAmountInputHandler = this.onChangeAmountInputHandler.bind(this);
    this.onChangeFromSelectorHandler = this.onChangeFromSelectorHandler.bind(this);
    this.onChangeToSelectorHandler = this.onChangeToSelectorHandler.bind(this);
  }

  onChangeAmountInputHandler(event){
    this.setState({
      amount: event.target.value
    })
  }

  onChangeToSelectorHandler(event){
    this.setState({
      to: event.target.value
    })
  }

  onChangeFromSelectorHandler(event){
    this.setState({
      from: event.target.value
    })
  }

  roundOff (num) {
    const x = Math.pow(10,2);
    return Math.round(num * x) / x;
  }

  render() {
    return (
      <div className="container">
        <h1>CURRENCY CONVERTER</h1>
        <div className="form-container">
          <div className="input-grp">
            <AnountInput amount={this.state.amount} inputHanlder={this.onChangeAmountInputHandler}/>
            
            <CurrencySelector category={this.state.from} selectorHandlder={this.onChangeFromSelectorHandler}/>
          
            <CurrencySelector category={this.state.to} selectorHandlder={this.onChangeToSelectorHandler}/>  
          </div>
  
          <Result amount={this.state.amount} from={this.state.from} result={this.roundOff(this.state.conversionRate[this.state.from][this.state.to] * this.state.amount)} to={this.state.to}/>
        </div>
      </div>
    );
  }
}

function AnountInput(props){
  return  (
    <div className="input-container">
      <label htmlFor="currencyAmount">Amount</label>
      <input type="number" value={props.amount} onChange={props.inputHanlder} min="0"/>
  </div>
  )
}

function CurrencySelector(props){
  return (
    <div className="input-container">
      <label>{props.category}</label>
      <select value={props.category} onChange={props.selectorHandlder}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="ZA">ZA</option>
      </select>
    </div>
  )
}

function Result(props){
  return (
    <div className="conversion-result-container">
      <p className="conversion-result"><span className="from">{props.amount} {props.from}</span> = <span className="to">{props.result} {props.to}</span></p>
    </div>
  )
}
export default App;

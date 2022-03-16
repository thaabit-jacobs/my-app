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
        usd: 
        {
          eur: 0.91,
          za: 15.04,
        },
        za: 
        {
          eur: 0.060,
          usd: 0.066
        },
        eur: 
        {
          za: 16.54,
          usd: 1.10
        }
      },

      from: "USD",

      to: "ZA"
    }

    this.onChangeAmountInputHandler = this.onChangeAmountInputHandler.bind(this);
    this.onChangeFromSelectorHandler = this.onChangeFromSelectorHandler.bind(this);
    this.onChangeToSelectorHandler = this.onChangeToSelectorHandler.bind(this);
  }

  onChangeAmountInputHandler(event){
    console.log(event.target.value);
  }

  onChangeToSelectorHandler(event){
    this.setState = ({
      to: event.target.value
    })
  }

  onChangeFromSelectorHandler(event){
    this.setState = ({
      from: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <h1>CURRENCY CONVERTER</h1>
        <div className="form-container">
          <div className="input-grp">
            <div className="input-container">
              <label htmlFor="currencyAmount">Amount</label>
              <input type="number" id="currencyAmount" name="currencyAmount" onChange={this.onChangeAmountInputHandler} min="0"/>
            </div>
  
            <div className="input-container">
              <label htmlFor="fromSelector">From</label>
              <select value={this.state.from} id="fromSelector" name="fromSelector" onChange={this.onChangeFromSelectorHandler}>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="ZA">ZA</option>
                </select>
            </div>
  
            <div className="input-container">
              <label htmlFor="toSelector">To</label>
              <select value={this.state.to} id="toSelector" name="toSelector" onChange={this.onChangeToSelectorHandler}>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="ZA">ZA</option>
                </select>
            </div>
          </div>
  
          <div className="conversion-result-container">
            <p className="conversion-result"><span className="from">1.00 USD</span> = <span className="to">0.87 EUR</span></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

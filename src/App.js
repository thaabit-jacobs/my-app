import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>CURRENCY CONVERTER</h1>
      <div className="form-container">
        <div className="input-grp">
          <div className="input-container">
            <label for="currencyAmount">Amount</label>
            <input type="number" id="currencyAmount" name="currencyAmount" min="0"/>
          </div>

          <div className="input-container">
            <label for="fromSelector">From</label>
            <select id="fromSelector" name="fromSelector">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="ZA">ZA</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
          </div>

          <div className="input-container">
            <label for="toSelector">To</label>
            <select id="toSelector" name="toSelector">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="ZA">ZA</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
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

export default App;

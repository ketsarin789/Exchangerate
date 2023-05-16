// import React from 'react'
// import PropTypes from 'prop-types'

// function ExchangeRate(props){
//   return(
//     <div className='convert'>
//       <input  className="exchangerate" type='text' value={props.amount} onChange={e => props.onAmountChange(e.target.value)}/>
//       <select className="exchangerate1" value={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
//       {props.currencies.map((currency => (
//         <option  value={currency}>{currency}</option>
//       )))}
//       </select>
//     </div>
//   )
// }

// ExchangeRate.prototype ={
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
//   currencies: PropTypes.array,
//   onAmountChange: PropTypes.func,
//   onCurrencyChange: PropTypes.func
// }
// export default ExchangeRate



 

import PropTypes from "prop-types";
import './App.css';

function CurrencyInput(props) {
  return (
    <div className="group">
      <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
      <select value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
        {props.currencies.map((currency => (
          <option value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;

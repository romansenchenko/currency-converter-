import axios from 'axios';
import { useEffect, useState } from 'react';
import CurrencyInput from './CurrencyInput';
import './currencyConverter.css';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { CircularProgress } from '@mui/material';
import { connect } from 'react-redux';
import { actions } from '../redux/rootReducer';

const CurrencyConverter = ({ amount1, amount2, currency1, currency2, rates, notLoaded, setAmount1, setAmount2, setCurrency1, setCurrency2, setNotLoaded, setRates }) => {

  const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.apilayer.com/fixer/latest?&base=USD',
    headers: {
      'apikey': '9TBg3Ib9cnZfkcq9eLA1WuxXdAFKeSZp'
    }
  })

  useEffect(() => {
    instance.get()
      .then(response => {
        setRates(response.data.rates)
        setNotLoaded(false)
      })
  }, [])

  useEffect(() => {
    if (!!rates) {
      handeAmount1Change(1)
    }
  }, [rates])

  useEffect(() => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
  }, [currency1 && currency2])

  const format = (number) => {
    return number.toFixed(4)
  }

  const handeAmount1Change = (amount1) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    setAmount1(amount1)
  }

  const handleCurrency1Change = (currency1) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    setCurrency1(currency1)
  }

  const handeAmount2Change = (amount2) => {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
    setAmount2(amount2)
  }

  const handleCurrency2Change = (currency2) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    setCurrency2(currency2)
  }

  const reverseCalc = () => {
    let tempCurr = currency1
    setCurrency1(currency2);
    setCurrency2(tempCurr);
  }

  return (
    <div className='converter'>

      <div className='preloader'> {notLoaded && <CircularProgress />} </div>

      <CurrencyInput
        onAmountChange={handeAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={Number(amount1)}
        currency={currency1}
        name={'У меня есть'} />

      <div className='reverseButton' >
        <SwapHorizIcon fontSize='large' sx={{ fontSize: 50, '&:hover': { color: '#555' } }} onClick={reverseCalc} />
      </div>

      <CurrencyInput
        onAmountChange={handeAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={Number(amount2)}
        currency={currency2}
        name={'Получаю'} />

    </div>
  );
}

let mapStateToProps = (state) => {
  return { ...state.root };
}

let mapDispatchToProps = (dispatch) => {
  return {
    setAmount1: (amount1) => { dispatch(actions.setAmount1(amount1)) },
    setAmount2: (amount2) => { dispatch(actions.setAmount2(amount2)) },
    setCurrency1: (currency1) => { dispatch(actions.setCurrency1(currency1)) },
    setCurrency2: (currency2) => { dispatch(actions.setCurrency2(currency2)) },
    setRates: (rates) => { dispatch(actions.setRates(rates)) },
    setNotLoaded: (notLoaded) => { dispatch(actions.setNotLoaded(notLoaded)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);

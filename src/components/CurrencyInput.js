import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';
import './currencyInput.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CurrencyInput = (props) => {

    return (
        <div className='currencyInput'>
            <div className='nameCalc'>{props.name}</div>
            <TextField
                id='outlined-number'
                type='number'
                InputLabelProps={{
                    shrink: true,
                }}
                value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)}
            />

            <FormControl >
                <Select
                    value={props.currency}
                    onChange={ev => props.onCurrencyChange(ev.target.value)}
                >
                    {props.currencies.map((currency) => (
                        <MenuItem key={Math.random} value={currency}>{currency}</MenuItem>))}
                </Select>
            </FormControl>
        </div>
    );
}

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
    name: PropTypes.string.isRequired
}

export default CurrencyInput;

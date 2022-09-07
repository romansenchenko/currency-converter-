import './App.css';
import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';
import { connect } from 'react-redux';
import { actions } from './redux/rootReducer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <CurrencyConverter />
    </div>
  );
}

let mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { ...actions })(App);

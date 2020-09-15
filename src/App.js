import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter'
import store from './Redux/store'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter></Counter>
     
    </div>
    </Provider>
  );
}

export default App;

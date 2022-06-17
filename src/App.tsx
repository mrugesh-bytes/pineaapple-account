import React from 'react';
import './App.css';
import Template from './template/Templete';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Template />
      </div>
    </Provider>
  );
}

export default App;

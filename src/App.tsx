import React from 'react';
import './App.css';
import Template from './template/Templete';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./components/core/axios/Interceptor"

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

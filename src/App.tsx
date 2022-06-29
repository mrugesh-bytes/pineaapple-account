import React, { useContext } from 'react';
import './App.css';
import Template from './template/Templete';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./components/core/axios/Interceptor"
import { AppContext } from './components/context/AppContect';

function App() {
  const appContect = useContext(AppContext);
  return (
    <Provider store={store}>
      <AppContext.Provider value={appContect}>
        <div className='App'>
          <Template />
        </div>
      </AppContext.Provider>
    </Provider>
  );
}

export default App;

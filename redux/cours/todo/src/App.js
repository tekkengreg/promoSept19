import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import totoReducer from './reducers';
import logo from './logo.svg';
import './App.css';
import Filter from './containers/Filter';
import Tasks from './containers/Tasks';
import poutre from './reducers/todoReducer'
import Filter2 from './containers/Filter2';
import Tasks2 from './containers/Tasks2';

const store = createStore(poutre)


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Filter />
        <Tasks /> */}
        <Filter2 /> 
        <Tasks2 />
        </header>
      </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import Display from './containers/Display'
import Panel from './containers/Panel'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import './App.css';

const store = createStore(reducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Display />
        <Panel />
      </div>
    </Provider>
  );
}

export default App;

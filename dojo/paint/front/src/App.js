import React from 'react';
import Tools from './components/Tools';
import { createStore ,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import './App.scss';
import Main from './components/Main';
import axios from 'axios';
import thunk from 'redux-thunk';


axios.get('http://localhost:5000/pcolors').then(({data})=>store.dispatch({type:"INIT_COLORS", colors:data}))
axios.get('http://localhost:5000/pshapes').then(({data})=>store.dispatch({type:"INIT_SHAPES", shapes:data}))
axios.get('http://localhost:5000/paints/1').then(({data})=>store.dispatch({type:"INIT_CSHAPES", cshapes:data}))
const store = createStore(reducers,
  applyMiddleware(thunk),
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <section className="title">paint.svg</section>
        <Main />
        <Tools />
      </div >
    </Provider>
  );
}

export default App;

import React from "react";
import Providers from "./navigation";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./redux/reducers";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <Providers/>
    </Provider>
  );
}


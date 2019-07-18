import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import { Login, FriendsList } from "./components";

import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

import reducer from './reducers';

import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/friends" component={FriendsList} />
      </div>
    </Provider>
  );
}

export default App;

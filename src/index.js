import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from "redux"
import { Provider } from "react-redux"
import { configureStore } from "./store/configureStore"
import { reducer } from "./reducers/"
import {AppContainer} from "./containers/AppContainer"

const store = createStore(reducer);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
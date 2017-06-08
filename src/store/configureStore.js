import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { reducer } from "../reducers/"

const createStoreWithMiddleware = applyMiddleware(
  logger()
)(createStore)

export const configureStore = (initialState) => {
  return createStoreWithMiddleware(reducer, initialState)
}
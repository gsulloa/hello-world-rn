import React, { Component } from 'react';
import styled from "styled-components/native"
import StackNavigator from "./navigators/StackNavigator"
import { Provider } from "react-redux"
import configureStore from "./redux/store"

const initialState = {}
const store = configureStore(initialState, undefined, undefined)


class App extends Component{
  render = () => {
    return(
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    )
  }
}


export default App

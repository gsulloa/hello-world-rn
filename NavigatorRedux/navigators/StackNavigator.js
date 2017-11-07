import React from "react"
import { Button } from "react-native"
import { StackNavigator, addNavigationHelpers } from "react-navigation"
import MainNavigator from "./MainNavigator"
import Form from "./screens/Form"

const StackNavigation = StackNavigator({
  Home: {
    screen: MainNavigator,
    navigationOptions: {
      title: "App",
    }
  },
  Form: {
    screen: Form,
    navigationOptions: {
      title: "Form",
      headerRight: <Button title="Info" />,
    }
  }
})

export default StackNavigation
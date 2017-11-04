import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import styled from "styled-components/native"
import { TabNavigator } from "react-navigation"
import Ionicons from 'react-native-vector-icons/Ionicons';

const Body = styled.View`
  flex: 1;
  background: #00bcd4;
  flex-flow: column nowrapp;
  align-items: stretch;
  justify-content: center;
`
const Wrapper = styled.View`
  flex: 1;
  background: white;
  margin: 15px;
  padding: 15px;
  border-radius: 30px;
`

const HomeScreen = ({ navigation }) => {
  return(
    <Body>
      <Wrapper>
        <Text>Hello World!</Text>
        <Text>Home</Text>
      </Wrapper>
    </Body>
  )
}
const ProfileScreen = ({ navigation }) => {
  return(
    <Body>
      <Wrapper>
        <Text>Hello World!</Text>
        <Text>Deail</Text>
      </Wrapper>
    </Body>
  )
}

const RootTabNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
})

export default class App extends Component {
  render() {
    return (
      <RootTabNavigator />
    );
  }
}
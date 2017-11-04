import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import styled from "styled-components/native"
import { StackNavigator } from "react-navigation"

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
        <Button
          onPress={() => navigation.navigate('Detail')}
          title="Go to Detail"
        />
      </Wrapper>
    </Body>
  )
}
const DetailScreen = ({ navigation }) => {
  return(
    <Body>
      <Wrapper>
        <Text>Hello World!</Text>
        <Text>Deail</Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go Home"
        />
      </Wrapper>
    </Body>
  )
}

const RootStackNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      headerTitle: 'Detail',
    },
  },
})

export default class App extends Component {
  render() {
    return (
      <RootStackNavigator />
    );
  }
}
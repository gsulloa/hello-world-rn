import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components/native"

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
  margin: 30px 15px 15px 15px;
  padding: 15px;
  border-radius: 30px;
`

const HomeScreen = () => {
  return(
    <Body>
      <Wrapper>
        <Text>Hello World!</Text>
        <Text>Home</Text>
      </Wrapper>
    </Body>
  )
}
const DetailScreen = () => {
  return(
    <Body>
      <Wrapper>
        <Text>Hello World!</Text>
        <Text>Deail</Text>
      </Wrapper>
    </Body>
  )
}



export default class App extends Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

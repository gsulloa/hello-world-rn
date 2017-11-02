import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from "styled-components/native"

const Body = styled.View`
  flex: 1;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`
const ButtonGroup = styled.View`
  flex-flow: row;
  justify-content: center;
`


export default class App extends React.Component {
  state = {
    count: 0,
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  render = () => {
    return(
      <Body>
        <View>
          <Text>{this.state.count}</Text>
        </View>
        <ButtonGroup>
          <Button onPress={this.increment} title="+" color="green" />
          <Button onPress={this.decrement} title="-" color="red"/>
        </ButtonGroup>
      </Body>
    )
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

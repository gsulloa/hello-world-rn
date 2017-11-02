import React from 'react';
import styled from "styled-components/native"

const Body = styled.View`
  flex: 1;
  background: #00bcd4;
  padding: 30px;
  align-items: stretch;
  justify-content: center;
`
const Wrapper = styled.View`
  flex: 1;
  background: #fff;
  padding: 30px;
  border-radius: 15px;
`
const List = styled.View`
  padding: 0 0 0 5px;
  flex: 1;
`
const ListItem = styled.Text`
  color: ${props => props.selected ? "red" : "black"};
`
const Title = styled.Text`
  font-size: 36px;
  text-align: center;
`
const Input = styled.TextInput`
  border: 1px solid gray;
`

export default class App extends React.Component {
  state = {
    input: "",
    list: [],
    selected: undefined,
  }
  handleWrite = text => {
    this.setState({
      input: text,
    })
  }
  handleSubmit = () => {
    this.setState({
      input: "",
      list: [
        ...this.state.list,
        {
          id: this.state.list.length + 1,
          body: this.state.input,
        }
      ]
    })
  }
  handlePressItem = selected => {
    this.setState({selected})
  }
  render = () => {
    return (
      <Body>
        <Wrapper>
          <Title>ToDo List!!</Title>
          <Input
            value={this.state.input}
            onChangeText={this.handleWrite}
            onSubmitEditing={this.handleSubmit}
          />
          <List>
            {this.state.list.map(e => 
              <ListItem
                key={e.id}
                selected={this.state.selected === e.id}
                onPress={() => this.handlePressItem(e.id)}
              >
                {e.body}
              </ListItem>)}
          </List>
        </Wrapper>
      </Body>
    );
  }
}
import React, { Component } from "react"
import { connect } from "react-redux"
import { Text, Button } from "react-native"
import { Body, Wrapper } from "../../components/containers"
import { increment, decrement } from "../../redux/modules/counter"

const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

class Home extends Component{
  render = () => {
    const { navigation } = this.props
    return(
      <Body>
        <Wrapper>
          <Text>Hello World!</Text>
          <Text>Home</Text>
          <Text>{this.props.counter}</Text>
          <Button
            onPress={() => this.props.increment()}
            title="+"
          />
          <Button
            onPress={() => this.props.decrement()}
            title="-"
          />
          <Button
            onPress={() => navigation.navigate("Form")}
            title="Go To Form"
          />
        </Wrapper>
      </Body>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

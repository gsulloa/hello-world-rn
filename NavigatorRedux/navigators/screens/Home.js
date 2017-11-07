import React from "react"
import { Text, Button } from "react-native"
import { Body, Wrapper } from "../../components/containers"

const Home = ({ navigation }) => {
  return(
    <Body>
      <Wrapper>
        <Text>Hello World!</Text>
        <Text>Home</Text>
        <Button
          onPress={() => navigation.navigate("Form")}
          title="Go To Form"
        />
      </Wrapper>
    </Body>
  )
}

export default Home

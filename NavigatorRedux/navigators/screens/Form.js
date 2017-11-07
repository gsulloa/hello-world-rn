import React from "react"
import { Text, ScrollView } from "react-native"
import { Body, Wrapper } from "../../components/containers"

const Form = () => {
  return(
    <Body>
      <Wrapper>
        <ScrollView>
          <Text>Hello World!</Text>
          <Text>Form</Text>
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
          1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
          1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((e, i) => <Text key={i}>{e}</Text>)}
        </ScrollView>
      </Wrapper>
    </Body>
  )
}

export default Form

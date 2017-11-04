import React, { Component } from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import styled from "styled-components/native"
import { StackNavigator, TabNavigator } from "react-navigation"
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
        <Button
          onPress={() => navigation.navigate("Form")}
          title="Go To Form"
        />
      </Wrapper>
    </Body>
  )
}
const ProfileScreen = () => {
  return(
    <Body>
      <Wrapper>
        <Text>Hello World!</Text>
        <Text>Profile</Text>
      </Wrapper>
    </Body>
  )
}
const FormScreen = () => {
  return(
    <Body>
      <Wrapper>
        <ScrollView>
          <Text>Hello World!</Text>
          <Text>Form</Text>
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
          1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
          1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map( e => <Text>{e}</Text>)}
        </ScrollView>
      </Wrapper>
    </Body>
  )
}

const MainScreenNavigator = TabNavigator({
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

const App = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: "App",
    }
  },
  Form: {
    screen: FormScreen,
    navigationOptions: {
      title: "Form",
      headerRight: <Button title="Info" />,
    }
  }
})

export default App

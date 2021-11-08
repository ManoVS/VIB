import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen'


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="regis" component={RegisterScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
    
    </Stack.Navigator>
  );
};

export default StackNavigator;

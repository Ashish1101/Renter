import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Phone from "../Screens/Phone";
import Login from "../Screens/Login";
import Onboarding from '../Screens/OnboardingScreen'
import OtpScreen from '../Screens/OtpScreen'

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator  mode="modal" headerMode="none">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="otp" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

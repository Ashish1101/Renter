import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./AuthNavigator";
import { AuthContext } from "../Providers/AuthProvider";

const Route = () => {
  const { token } = useContext(AuthContext);
  console.log("token in route", token);
  return (
   
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
  );
};

export default Route;

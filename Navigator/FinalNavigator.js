import React, { useContext, useEffect, useState } from "react";

import { AuthContext, AuthProvider } from "../Providers/AuthProvider";
import Route from "./Route";
import { LocationProvider } from "../Providers/LocationProvider";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import {getData} from '../Storage/AsyncStorage'

const FinalNavigator = () => {
  // const token = getData('userToken')
  // console.log('token is' , token)

  let token = true
  
  return (
    <AuthProvider>
      <LocationProvider>
        <NavigationContainer>
           {token !== null ? (<MainNavigator />) : (<AuthNavigator />)}
        </NavigationContainer>
      </LocationProvider>
    </AuthProvider>
  );
};

export default FinalNavigator;

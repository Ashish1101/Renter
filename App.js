/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useContext } from "react";
 import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
 import { Colors } from "react-native/Libraries/NewAppScreen";
 import { NavigationContainer } from "@react-navigation/native";
 import AuthNavigator from "./Navigator/AuthNavigator";
 import FinalNavigator from "./Navigator/FinalNavigator";
 import MainNavigator from "./Navigator/MainNavigator";
 import { AuthContext, AuthProvider } from "./Providers/AuthProvider";
 import { LocationProvider } from "./Providers/LocationProvider";
 
 const App = () => {
 
   return (
     <>
      <FinalNavigator  />
     </>
   );
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   engine: {
     position: "absolute",
     right: 0,
   },
   body: {
     backgroundColor: Colors.white,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: "600",
     color: Colors.black,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: "400",
     color: Colors.dark,
   },
   highlight: {
     fontWeight: "700",
   },
   footer: {
     color: Colors.dark,
     fontSize: 12,
     fontWeight: "600",
     padding: 4,
     paddingRight: 12,
     textAlign: "right",
   },
 });
 
 export default App;
 
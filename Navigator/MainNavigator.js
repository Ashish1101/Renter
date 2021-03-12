import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer'
import Map from "../Screens/Map";
import OnlineMech from "../Screens/OnlineMech";
import AfterBooking from "../Screens/AfterBooking";
import Permission from "../Screens/Permisson";
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

//if i want a screen to be a stack then wrap inside stack navigator

const MapStackScreen = () => {
   return (
    <Stack.Navigator>
    <Stack.Screen name="map" component={Map} options={{header: () => null}} />
    <Stack.Screen name="mechanic" component={OnlineMech} />
    <Stack.Screen name="afterBooking" component={AfterBooking} />
  </Stack.Navigator>
   )
};

const PermissionStackScreen = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="permission" component={Permission} />
  </Stack.Navigator>
  )
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MapStackScreen} />
      <Drawer.Screen name="Permission" component={PermissionStackScreen} options={{DrawerBarLabel: () => null}}  />
    </Drawer.Navigator>
  );
};

export default MainNavigator;

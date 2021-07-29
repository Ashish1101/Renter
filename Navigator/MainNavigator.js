import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer'
import Map from "../Screens/Map";
import OnlineMech from "../Screens/OnlineMech";
import AfterBooking from "../Screens/AfterBooking";
import Permission from "../Screens/Permisson";
import FrontScreen from '../Screens/MainScreenStack/FrontScreen'
import Icon from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

//if i want a screen to be a stack then wrap inside stack navigator

const MapStackScreen = () => {
   return (
    <Stack.Navigator>
    <Stack.Screen name="map" component={Map} options={{header: () => null}} />
    <Stack.Screen name="mechanic" component={OnlineMech} options={{header: () => null}} />
    <Stack.Screen name="afterBooking" component={AfterBooking} options={{header: () => null}}  />
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


const FrontStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle:{elevation:0 , shadowOpacity:0}}}>
       <Stack.Screen name="frontScreen" component={FrontScreen} />
       <Stack.Screen name="map" component={MapStackScreen} options={{headerStyle:{elevation:0 , shadowOpacity:0}}} />
    </Stack.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="frontScreen">
      <Tab.Screen name="frontScreen" component={FrontStackScreen} options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name='home'
							size={30}
							color={`${focused ? "#232423" : "#748c94"}`}
						/>
					),
				}} />
      {/* <Tab.Screen name="Home" component={MapStackScreen} /> */}
      <Tab.Screen name="Permission" component={PermissionStackScreen} options={{TabBarLabel: () => null}} options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name='user'
							size={30}
							color={`${focused ? "#232423" : "#748c94"}`}
						/>
					),
				}}  />
    </Tab.Navigator>
  );
};

export default MainNavigator;

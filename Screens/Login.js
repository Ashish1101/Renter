/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { AuthContext } from "../Providers/AuthProvider";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Login = ({ navigation }) => {
  const {loginWithGoogle} = useContext(AuthContext)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.cont1}>
          <View>
            <Text style={styles.headingSize}>Welcome</Text>
            <Text style={styles.headingSize}>MechFiner</Text>
          </View>
          <View>
            {/* <Image source={require('../assests/car.png')} style={{height:200, width:300}} /> */}
            <View>
              <Text style={{ textAlign: "justify", fontSize: 25 }}>
                Explore new ways to{" "}
              </Text>
              <Text style={{ textAlign: "justify", fontSize: 25 }}>
                find service
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cont2}>
          <Button
            title="continue with phone"
            onPress={() => navigation.navigate("phone")}
            buttonStyle={styles.btnStyle}
          />
          <Button onPress={loginWithGoogle} title="continue with google" buttonStyle={styles.btnStyle}  />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingSize: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexDirection: "column",

    width: width,
    height: height,
    justifyContent: "space-between",
  },
  btnStyle: {
    backgroundColor: "black",
    width: width / 1.2,
    marginHorizontal: 30,
    height: 45,
    marginVertical: 5,
  },
  cont2: {
    marginBottom: 50,
  },
  cont1: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default Login;

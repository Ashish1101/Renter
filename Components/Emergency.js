import React from "react";
import { View, Text, StyleSheet , TouchableOpacity, TouchableOpacityBase} from "react-native";
import {} from "react-native-elements";
import { Width, Height } from "../Constants/Dimensions";
import { borderRadius, edgesWidth, elevation } from "../Constants/basicStyles";
import { Colors } from "../Constants/Colors";
const Emergency = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.textStyle}>FIND THE HOUSE YOU WANT TO LIVE</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Width / edgesWidth,
    height: Height / 4,
    alignSelf: "center",
    backgroundColor: Colors.primaryColor,
    borderRadius: borderRadius,
    elevation: elevation,
  },
  textStyle: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
});

export default Emergency;

import React from "react";
import { View, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import {Colors} from '../Constants/Colors'
import {Height} from '../Constants/Dimensions'
const OtpHeader = ({navigation}) => {
  return (
    <>
      <View
        style={{
          height: Height / 3.5,
          backgroundColor: Colors.primaryColor,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Icon
          iconStyle={{ margin: 8 }}
          name="arrow-back"
          type="material"
          size={32}
          color="white"
          onPress={() => navigation.navigate("login")}
        />
        {/* make this icon to go back in login screen */}
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 32, color: "white" }}>
            Phone Verification
          </Text>
          <Text style={{ fontSize: 18, color: "white" }}>
            Enter your OTP code here
          </Text>
        </View>
      </View>
    </>
  );
};

export default OtpHeader;

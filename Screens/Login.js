/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { AuthContext } from "../Providers/AuthProvider";
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "../Constants/Colors";
import { Width, Height } from "../Constants/Dimensions";
import { primaryButton, socialButton } from "../Constants/ButtonStyles";
import {PHONE_AUTH} from '../Graphql/Mutations/AuthMutation'
import { useMutation } from '@apollo/client'

const Login = ({ navigation }) => {
  // const { loginWithGoogle } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);
  // const [phoneAuth , {data , loading , error}] = useMutation(PHONE_AUTH , {
  //    onCompleted({phoneAuth}) {
  //      console.log('phoneAtuh' , phoneAuth)
  //      if(phoneAuth.status === 'pending') {
  //         navigation.navigate('otp')
  //      }
  //    },
  //    onError({graphQLErrors , stack , extraInfo}) {
  //      console.log('graphql error' , stack)
  //      console.log('graphql error' , extraInfo)
  //    }
  // })

  // console.log('value ', value)

  // console.log('data from mutation' , data)
  // console.log('data from mutation' , error)
  // const phoneLogin = () => {
  //   phoneAuth({variables:{phoneNumber:value}})
  //   .then(res => {
  //     console.log('res' , res)
  //   }).catch(err => console.log('error in phone input' , err))
  // }


  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
        
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Button title="Login with google" buttonStyle={styles.socialStyle} />
        <Text style={{ textAlign: "center", marginBottom: 20 }}>
          By clicking, you are agree to{" "}
          <Text style={{ fontWeight: "bold" }}>Terms and conditions</Text>
        </Text>
      </View>

      <View style={styles.floatView}>
        <View>
          <Text style={{fontSize:30 , padding:40}}>Welcome Renter</Text>
        </View>
        <View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : "height"}
          >
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="IN"
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              withDarkTheme
              // withShadow
              // autoFocus
              containerStyle={{ width: "89%", height: 50, marginLeft: 18 }}
              textInputStyle={{ height: 40 }}
            />
            <Button
              title="Sign Up"
              buttonStyle={styles.btnStyle}
              onPress={() => navigation.navigate('otp')}
            />
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingSize: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: Width,
    height: Height,
  },
  socialStyle: socialButton,
  btnStyle: primaryButton,
  floatView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    width: Width / 1.2,
    height: Height / 2,
    backgroundColor: "white",
    top: "30%",
    alignSelf: "center",
    borderRadius: 10,
  },
});

export default Login;

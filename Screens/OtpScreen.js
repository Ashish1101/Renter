import React, { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet , Keyboard, Platform, KeyboardAvoidingView} from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import OtpHeader from "../Components/OtpHeader";
import { primaryButton } from "../Constants/ButtonStyles";


const OtpScreen = ({ navigation }) => {
  
  const isAndroid = Platform.OS === 'android'
   
  const [otpArray, setOtpArray] = useState(["", "", "", ""]);
  
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null); 

  console.log('otp' , otpArray)
  
  const onOtpChange = (index) => {
    return value => {
      if (isNaN(Number(value))) {
        // do nothing when a non digit is pressed
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      // auto focus to next InputText if value is not blank
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef?.current.focus();
        } else if (index === 1) {
          thirdTextInputRef?.current.focus();
        } else if (index === 2) {
          fourthTextInputRef?.current.focus();
        }
      }
    };
  };

  const deleteOtp = index => {
    return ({nativeEvent: {key : value}}) => {
      if(value === 'Backspace' && otpArray[index] === '') {
        if(index === 1) {
          firstTextInputRef.current.focus()
        } else if(index === 2) {
          secondTextInputRef.current.focus()
        } else if(index === 3) {
          thirdTextInputRef.current.focus()
        }


        if(isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index-1] = '';
          setOtpArray(otpArrayCopy)
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      {/* if we leave this keyboard view then button will become in the end */}
       <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}  >
       <View style={{ display: "flex" }}>
        <OtpHeader navigation={navigation} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 40,
          }}
        >
          {[firstTextInputRef,secondTextInputRef,thirdTextInputRef,fourthTextInputRef].map((textInputRef, index) => (
            
              <TextInput
              maxLength={1}
              key={index.toString()}
              style={styles.inputStyle}
              keyboardType="numeric"
              value={otpArray[index]}
              autoFocus={index === 0 ? true : undefined}
              onChangeText={onOtpChange(index)}
              ref={textInputRef}
              onKeyPress={deleteOtp(index)}
            />
          ))}
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Button title="Continue" buttonStyle={styles.primaryBtn} />
      </View>
       </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  textInput: {
    width: 60,
    height: 30,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    textAlign: "center",
    marginHorizontal: 5,
  },
  primaryBtn: primaryButton,
  inputStyle: {
    width: 30,
    borderWidth: 3,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    marginHorizontal: 10,
    textAlign: "center",
    alignSelf: "center",
    borderColor: "gray",
    fontSize: 24,
  },
});

export default OtpScreen;

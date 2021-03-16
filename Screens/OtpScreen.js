import React, { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet , Button } from "react-native";


const OtpScreen = () => {
  const firstRef = useRef("");
  const secondRef = useRef("");
  const thirdRef = useRef("");
  const fourthRef = useRef("");
  
  console.log(firstRef , secondRef , thirdRef , fourthRef)

  const [otp , setOtp] = useState(['' , '', '', ''])
 
  console.log('otp' , otp)

  return (
    <View style={styles.container}>
      <View style={{display:'flex', flexDirection:'row'}}>
        <Text>For input</Text>
        {[firstRef, secondRef, thirdRef, fourthRef].map((item, index) => (
          <TextInput 
          value={item.current}
          style={styles.textInput}
          key={index}
          onChangeText={(text) => setOtp([text, ...otp])}
           />
        ))}
      </View>
      <View>
        <Button title="Continue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-around",
  },
  textInput: {
    width: 60,
    height: 30,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius:10,
    textAlign:'center',
    marginHorizontal:5
  },
});

export default OtpScreen;

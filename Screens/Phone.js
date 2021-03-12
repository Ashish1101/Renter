import React, { useEffect, useState , useContext } from "react";
import { View, Text, Dimensions, StyleSheet, Platform, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


const Phone = () => {
	const width = Dimensions.get("window").width;
	const navigation = useNavigation()
	return (
		<View
			style={{
				flex: 1,
				marginTop: 50,
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<View style={{ width: width / 1.2, marginHorizontal: 30 }}>
				<View>
					<Text style={style.headingFont}>Enter Phone number for</Text>
					<Text style={style.headingFont}>verification</Text>
					<View style={{ paddingVertical: 20 }}>
						<Text style={style.subheading}>
							This number will be used for all ride-related communication. You
							shall recieve an SMS with code for verification
						</Text>
					</View>
				</View>
				<View>
					<Input placeholder='Your number' keyboardType='number-pad' />
					{/* <Text>{text} Hello</Text> */}
				</View>
			</View>
			<View
				style={{ paddingBottom: 16, width: width / 1.1, marginHorizontal: 20 }}
			>
				<Button
					type='solid'
					buttonStyle={{ backgroundColor: "black" }}
					titleStyle={{ fontSize: 18 }}
					title='Next'
                    onPress={console.log('working button')}
				/>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	headingFont: {
		fontSize: 29,
		fontWeight: "bold",
	},
	subheading: {
		fontSize: 16,
		color: "gray",
	},
});

export default Phone;


// const location = await Location.getCurrentPositionAsync({})
// 					setLocation(location)
// 					//do something with location
// 					console.log('location' , location)
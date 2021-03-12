import React from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
const BookingCard = ({ name, distance }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Text> For image </Text>
      </View>
      <View>
        <Text> Distance {distance} </Text>
        <Text> Name {name} </Text>
        <Button
          title="Book"
          onPress={() => navigation.navigate("afterBooking")}
        />
      </View>
    </View>
  );
};

//on press booking button show a map which displays the location of mechanic
//and distance and call now cancel

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    height: Dimensions.get("window").height / 4.5,
    width: Dimensions.get("window").width / 1.2,
    backgroundColor: "gray",
    marginHorizontal: 30,
    marginVertical: 5,
  },
  imageContainer: {
    backgroundColor: "red",
  },
});

export default BookingCard;

import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, TextInput, StyleSheet } from "react-native";
import { Input, SearchBar, Icon } from "react-native-elements";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import PropTypes from "prop-types";

const width = Dimensions.get("window").width;
import Geocoder from "react-native-geocoding";
const MapSearchHeader = ({ region }) => {
  const navigation = useNavigation();
  const [formattedAddress, setFormattedAddress] = useState("");
  const [place , setPlace] = useState('')

  Geocoder.init('AIzaSyAdg4DBHAoDDd45uSnAeJ5J0ao2YEBK7W4')

  console.log('formatted data' , formattedAddress)

  console.log('place', place)

  console.log('regios' , region)

  useEffect(() => {
    (async () => {
      try {
        const geoLocation = await Geocoder.from(
          region.latitude,
          region.longitude
        );
        setFormattedAddress(geoLocation?.results[0]?.formatted_address);
      } catch (err) {
        console.log("eerr from geocoding", err);
      }
    })();
  }, [region]);

  return (
    <View style={style.mainContainer}>
      <View style={style.searchContainer}>
        <View style={{ paddingHorizontal: 5 }}>
          <Icon
            name="menu"
            size={32}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
        <TextInput
          value={formattedAddress}
          placeholder="current location"
          style={style.inputStyle}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    width: width / 1.2,
    marginHorizontal: 29,
    // marginTop:-50,
    top: "5%",
    marginLeft: 60,
    height: 50,
    shadowColor: "#333333",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 6,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputStyle: {
    flex: 3,
    paddingLeft: 5,
  },
});

MapSearchHeader.propTypes = {
  region: PropTypes.object.isRequired,
};

export default MapSearchHeader;

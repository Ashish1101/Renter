import React, {useContext} from "react";
import { View, Image , StyleSheet , Dimensions} from "react-native";
import { Icon , Button , SearchBar} from "react-native-elements";
import PropTypes from 'prop-types'
import {useNavigation} from '@react-navigation/native'
import {AuthContext} from '../Providers/AuthProvider'
//onClicking the confirm button show online mechs

//passing location prop to onine mech

const MapUtility = ({showCurrentLocation, location}) => {
 
  const navigation = useNavigation()
  const {latitude , longitude} = location
  return (
    <>
      <View style={styles.currentLocationBtn}>
        <Icon
          onPress={showCurrentLocation}
          name="gps-fixed"
          type="material"
          size={20}
          color="black"
          reverse
        />
      </View>
      
      <View style={{ position: "absolute", top: "90%" }}>
        <Button title="Confirm location" buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate('mechanic', {
           latitude:latitude,
           longitude:longitude
        })}  />
      
      </View>
      <View style={{ position: "absolute", top: "45%", left: "45%" }}>
        <Image
          source={require("../assests/onlineMarker.png")}
          style={{ height: 48, width: 48 }}
        />
      </View>
    </>
  );
};

MapUtility.propTypes = {
  showCurrentLocation:PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    currentLocationBtn: {
        position:'absolute',
        top:'70%',
        left:'80%',
        width:40,
        height:40
    },
    buttonStyle: {
        width:Dimensions.get('window').width/1.2,
        backgroundColor:'black'
      },
})

export default MapUtility;

import React, { useEffect, useState , useContext } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  Image,
} from "react-native";


import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapUtility from "./MapUtility";
import PropTypes from "prop-types";
import {LocationContext} from '../Providers/LocationProvider'

import SearchHeader from './SearchHeader'
// import MapSearchBar from './MapSearchBar'

const Map = () => {

  // const navigation = useNavigation()
  const { width, height } = Dimensions.get('window');
   const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
        
  const {showCurrentLocation , AskForPermission , onRegionChange , location} = useContext(LocationContext)
  
  useEffect(() => {
    AskForPermission()
  },[])

  return (
    <View style={styles.page}>
      <MapView
        style={styles.container}
        rotateEnabled={true}
        showsBuildings={true}
       showsTraffic={true}
      
        followsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={false}
        onRegionChangeComplete={onRegionChange}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.00523,
          longitudeDelta: 0.0034,
        }}
        renderToHardwareTextureAndroid={true}
        
      ></MapView>

      <SearchHeader region={location}  />
      
      <MapUtility showCurrentLocation={showCurrentLocation} location={location} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "black",
  },
});

export default Map;

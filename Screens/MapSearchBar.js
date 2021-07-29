// import React, { useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { View } from "react-native";
// import { SearchBar, Icon } from "react-native-elements";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";



// const MapSearchBar = (props) => {
  
//   const ref = useRef()
//   useEffect(() => {
//       ref.current.setAddressText('')
//   }, [])

//   return (
//     <View style={{direction:'row'}}>
//       {/* <Icon name="menu" type="material" size={32} color="black" containerStyle={{position:'absolute' , top:'20%' , zIndex:1}} /> */}
//       <GooglePlacesAutocomplete
//        ref={ref}
//        placeholder="enter location"
//        fetchDetails={true}
//        minLength={3}
//        listViewDisplayed='auto'
//        currentLocation={true}
//        renderDescription={row => row.description}
//        enablePoweredByContainer={false}
//        onPress={(data , details) => {
//            console.log('daata from autocomple' , data)
//            console.log('details ', details)
           
//        }}
//        query={{
//            key:'',
//            language:'en',
//            types:'(cities)',
//            components:'country:india'
//        }}
       
//          />
//     </View>
//   );
// };

// MapSearchBar.propTypes = {

// }

export default MapSearchBar;

import React, { useContext , useEffect, useRef, useState } from 'react'
import { View , StyleSheet , Dimensions} from 'react-native'
import {Button, Text} from 'react-native-elements'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { LocationContext } from '../Providers/LocationProvider';
import MapViewDirections from 'react-native-maps-directions'
import axios from 'axios'
const AfterBooking = () => {
    const [distance , setDistance] = useState(0)
    const [time , setTime] = useState(0)
    const {location} = useContext(LocationContext)
    console.log('after booking coords' , location)
    const dest = [
      {
        latitude:26.78063114431,
        longitude:79.0329617922009
      },
      {
        latitude:location.latitude,
        longitude:location.longitude
      }
    ]

    
    // useEffect(() => {
    //   (async () => {
    //       try {
    //         const destination = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=[${location.latitude},${location.longitude}]&destinations=[${dest.latitude},${dest.longitude}]&key=AIzaSyAdg4DBHAoDDd45uSnAeJ5J0ao2YEBK7W4`)
    //         console.log('desitnation' , destination)
    //        } catch (err) {
    //          console.log('err ' , err)  
    //       }
    //   })()
    // })
    
    const CalculateDistanceTime = result => {
        if(result) {
           setTime(result.duration)
           setDistance(result.distance)
        } else {
          console.log('fetching details')
        }
    }

    return (
        <View style={styles.page}>
            <MapView
            style={styles.container}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
               latitude:location.latitude,
               longitude:location.longitude,
               latitudeDelta:0.0423,
               longitudeDelta:0.0234
            }}
            
            >

            {/* here i want to make only two markers visible on the screen */}
           <Marker coordinate={dest[1]} />
           <Marker coordinate={dest[0]} />
           <MapViewDirections 
           origin={dest[1]}
           onReady={CalculateDistanceTime}
           mode='DRIVING'
           precision='high'
           destination={dest[0]}
           apikey={'AIzaSyAdg4DBHAoDDd45uSnAeJ5J0ao2YEBK7W4'}
           strokeWidth={4}
           strokeColor='black'
           />
            </MapView>
            <View style={styles.floatContainer}>
               <Text style={styles.distanceTime}>{time.toFixed(2)} min</Text>
               <Text style={styles.distanceTime}>{distance.toFixed(2)} km</Text>
                <View style={{display:'flex' , flexDirection:'row' , justifyContent:'space-evenly'}}>
                  <Button title='Call' raised  type='outline' buttonStyle={styles.buttonStyle} onPress={() => console.log('call button')} />
                  <Button title='Cancel' raised type='outline' buttonStyle={styles.buttonStyle} onPress={() => console.log('call button')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 1,
      width: Dimensions.get("window").width,
      backgroundColor: "black",
    },
    floatContainer: {
        position:'absolute',
        top:'80%',
        width:300,
        height:120,
        backgroundColor:'white',
        borderRadius:10,
        display:'flex',
        justifyContent:'space-evenly'
    },
    distanceTime: {
        fontSize:25,
        textAlign:'center',
        paddingTop:10
    },
    buttonStyle:{
        width:100
    }
  });

export default AfterBooking

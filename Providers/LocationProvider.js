import React, { createContext, useState } from "react";
import { PERMISSIONS, check, request, checkMultiple} from "react-native-permissions";
import Geolocation from "react-native-geolocation-service";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.00423,
    longitudeDelta: 0.0234,
  });

  const AskForPermission = async () => {
    try {
      if (Platform.OS === "android") {
        /*  first check permission by default on android
                if it already had then locate the user */
        const checkResult = await check(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        console.log(checkResult);
        switch (checkResult) {
          case "denied":
            const requestResult = await request(
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            );
            console.log(requestResult);
            if (requestResult === "granted") {
              //if user accepts then check for current location
              const location = Geolocation.getCurrentPosition(
                (position) => {
                  console.log("postions in denied section", position);
                  setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                  });
                },
                (error) => {
                  console.log(error);
                },
                {
                  enableHighAccuracy: true,
                }
              );

              console.log("location ", location);
              console.log("request accepted", requestResult);
            } else {
              //if requestResult become denied the send it to permission page
              console.log("send him to permission page");
              // navigation.navigate('permission')
              return;
            }

          case "granted":
            //if the app already granted then check for current location

            Geolocation.getCurrentPosition(
              (position) => {
                console.log("postions", position);
                //set the postion in state
                setLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
              },
              (error) => {
                console.log(error);
              },
              {
                enableHighAccuracy: true,
              }
            );
        }
      }
    } catch (err) {
      console.log("main error", err);
    }
  };

  const showCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        console.log("error from currentLocation button", err);
      },
      { enableHighAccuracy: true }
    );
  };

  const onRegionChange = (region) => {
    setLocation({
      latitude: region.latitude,
      longitude: region.longitude,
      longitudeDelta: region.longitudeDelta,
      latitudeDelta: region.latitudeDelta,
    });
    console.log("region changin", region);
  };

  return (
    <LocationContext.Provider
      value={{
        onRegionChange,
        showCurrentLocation,
        AskForPermission,
        location: location,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

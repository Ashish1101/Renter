import React, { createContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import {GoogleSignin , statusCodes} from '@react-native-google-signin/google-signin'
import {storeData} from '../Storage/AsyncStorage'
export const AuthContext = createContext()



export const AuthProvider = ({ children }) => {
  
  const [token , setToken] = useState(false)
  const login = () => {
      setToken(true)
  } 

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:'438756471001-8j5da9q3uup5l8a2g6tqc0vh5n4l3f57.apps.googleusercontent.com',
      scopes:['email', 'profile'],
      offlineAccess:true
    });
  },[])

  const loginWithGoogle = async () => {
    try {
    
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo' , userInfo)
      return userInfo
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('cancelled by user', error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('in progress', error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('not avaliabel', error)
      } else {
        // some other error happened
        console.log('something went wong' , error)
      }
    }
  }

   
  const signOut = () => {
    setToken(false)
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        signOut,
        loginWithGoogle,
        token:token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

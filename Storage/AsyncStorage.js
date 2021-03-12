import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key , value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
       console.log('error while saving async')
    }
  }

  export const getData = async (data) => {
    try {
      const value = await AsyncStorage.getItem(data)
      if(value !== null) {
        return JSON.stringify(value)
      } else {
          return null
      }
    } catch(e) {
      // error reading value
      console.log('error in reading async storage')
    }
  }
  
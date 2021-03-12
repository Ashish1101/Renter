import React from 'react'
import { View , Text , Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
const OnboardingScreen = ({navigation}) => {
    return (
       
            <Onboarding
            onDone={() => navigation.replace('login')}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assests/car.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                  },
            ]} 
             />
      
    )
}

export default OnboardingScreen

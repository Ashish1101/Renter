import React from 'react'
import { View , Text , Button} from 'react-native'
import EmergencyBreakout from '../../Components/Emergency'

const FrontScreen = ({navigation}) => {
    return (
        <View style={{backgroundColor:'#ffffff'}}>
            <EmergencyBreakout />
            <Button onPress={() => navigation.navigate('map')} title="Maps" />
        </View>
    )
}

export default FrontScreen

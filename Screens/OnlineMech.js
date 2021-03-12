import React from 'react'
import { View , Text , FlatList } from 'react-native'
import {Rating} from 'react-native-elements'
import BookingCard from '../Components/BookingCard'


//seprate screen after location confirm

const array = [
    {name:'Ashish' , km:'4' , id:'1'},
    {name:'Abhishek' , km:'10' , id:'2'},
    {name:'Abhinay' , km:'7' , id:'3'},
    {name:'Ujjwal' , km:'11' , id:'4'},
    {name:'Gulshan' , km:'3' , id:'5'},
]

//passing location props to booking card

//after passing location props to booking send it to afterBooking screen

const OnlineMech = ({route}) => {
    const {latitude ,longitude} = route.params
    console.log('location props from online mech' , latitude)
    return (
        <>
        <FlatList
        data={array}
        renderItem={({item}) => (<BookingCard name={item.name}  distance={item.km} key={item.id} />)} 
        />
        </>
    )
}

export default OnlineMech

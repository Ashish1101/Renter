import {ApolloClient , InMemoryCache , createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getData} from './AsyncStorage'

const httpLink = createHttpLink({
    uri:'http://192.168.43.181:4000/graphql'
})

const authLink = setContext((_ , {headers}) => {
    const token = AsyncStorage.getItem('userToken')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

export const cache = new InMemoryCache()

export const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache:cache,
   connectToDevTools:true
})


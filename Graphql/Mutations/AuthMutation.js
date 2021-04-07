import {gql} from '@apollo/client'


export const PHONE_AUTH = gql`
   mutation phoneAuth($phoneNumber:String!) {
       phoneAuth(phoneNumber:$phoneNumber) {
           status
           valid
           phoneNumber
       }
   }
`
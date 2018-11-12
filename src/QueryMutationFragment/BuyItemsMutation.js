import gql from 'graphql-tag';

export const buyItemsMutation = gql`
    mutation buyItems($customerName:String! , $itemId:Int!, $quantity:Int!){
        buyItems(
            customerName: $customerName,
            itemId: $itemId,
            quantity: $quantity
        ) {
            isSuccess,
            message
        }
    }
`
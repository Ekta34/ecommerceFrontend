import gql from 'graphql-tag';

export const getCustomersQuery = gql`
    query customerFeed {
        customerFeed {
            name,
            items{
                itemId,
                name,
                quantity
            }
        }
    }
`
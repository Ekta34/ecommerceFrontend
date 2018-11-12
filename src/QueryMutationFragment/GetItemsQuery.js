import gql from 'graphql-tag';

export const getItemsQuery = gql`
    query itemFeed {
        itemFeed {
            id,
            name
        }
    }
`
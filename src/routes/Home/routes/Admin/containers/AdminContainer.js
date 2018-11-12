import { connect } from 'react-redux'
import Admin from '../components/Admin'
import { graphql, compose, withApollo } from "react-apollo";
import {getCustomersQuery} from '../../../../../QueryMutationFragment/GetCustomersQuery'

const mapDispatchToProps = {
   
}

const mapStateToProps = (state,ownProps) => ({
    
})

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withApollo,
    graphql(getCustomersQuery, {
        name: "customerFeed",
        options: {
            fetchPolicy:"network-only"
        },
        props({customerFeed}) {  
            return{
                customerFeed,
                isData : customerFeed.customerFeed,
                isLoading:
                    customerFeed["networkStatus"] == 1 ||
                    customerFeed["networkStatus"] == 2 ||
                    customerFeed["networkStatus"] == 4,        
            }
        }
    })
)(Admin);
import { connect } from 'react-redux'
import Customer from '../components/Customer'
import {initializeCustomersArray,initializeItemsArray,updateQuantity,
            updateSelectedItems,updateCustomerInfo,buyItems,setError} from './CustomerModule'

const mapDispatchToProps = {
    initializeCustomersArray,
    initializeItemsArray,
    updateQuantity,
    updateSelectedItems,
    updateCustomerInfo,
    buyItems,
    setError
}

const mapStateToProps = (state,ownProps) => ({
    customers: state.customer.customers,
    items : state.customer.items,
    selectedItems: state.customer.selectedItems,
    customerName:state.customer.customerName,
    error:state.customer.error
})

export default 
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Customer);
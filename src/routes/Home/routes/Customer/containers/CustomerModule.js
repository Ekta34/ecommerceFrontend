import update from 'immutability-helper';
import { browserHistory } from 'react-router'
import client from 'apolloClient'
import {getItemsQuery} from '../../../../../QueryMutationFragment/GetItemsQuery'
import {buyItemsMutation} from '../../../../../QueryMutationFragment/BuyItemsMutation'
import {getCustomersQuery} from '../../../../../QueryMutationFragment/GetCustomersQuery'

export const NAME = 'customer'
export const SET_CUSTOMER_ARRAY = 'SET_CUSTOMER_ARRAY' + NAME
export const UPDATE_SELETCTED_ITEMS = 'UPDATE_SELETCTED_ITEMS' + NAME
export const UPDATE_ITEMS = 'UPDATE_ITEMS' + NAME
export const UPDATE_CUSTOMER_INFO = 'UPDATE_CUSTOMER_INFO' + NAME
export const RESET_SELECTED_ITEMS = 'RESET_SELECTED_ITEMS' + NAME
export const SET_ERROR = 'SET_ERROR' + NAME

export const setCustomerArray = (data) => {
  return {
    type : SET_CUSTOMER_ARRAY,
    data
  }
}

export const updateSelectedItems = (data) => {
  return {
    type : UPDATE_SELETCTED_ITEMS,
    data
  }
}

export const updateItems = (data) => {
  return {
    type : UPDATE_ITEMS,
    data
  }
}

export const updateCustomerInfo = (data) => {
  return {
    type : UPDATE_CUSTOMER_INFO,
    data
  }
}

export const resetSelectedItems = (data) => {
  return {
    type : RESET_SELECTED_ITEMS,
    data
  }
}

export const setError = (data) => {
  return {
    type : SET_ERROR,
    data
  }
}

export const initializeCustomersArray = () => {
  return (dispatch,getState) => {

      client.query({
        query: getCustomersQuery
      }).then((result) => {

          let customerArray = [];

        _.map(result.data.customerFeed , (customer,index) => {
            let param = {
              label:customer.name,
              value:customer.name,
            };
            customerArray.push(param);
        });

        dispatch(setCustomerArray(customerArray));
        
      }).catch((err) => {
        console.log(err);
      });   
  }
}

export const initializeItemsArray = () => {
  return (dispatch,getState) => {

      client.query({
        query: getItemsQuery
      }).then((result) => {

          let itemArray = [];

        _.map(result.data.itemFeed , (item,index) => {
            let param = {
              id:item.id,
              name:item.name,
              quantity:0
            };
            itemArray.push(param);
        })

        dispatch(updateItems(itemArray));
        
      }).catch((err) => {
        console.log(err);
      });       
  } 
}

export const updateQuantity = (updatedItem) => {  
  return (dispatch,getState) => {
      let items = getState().customer.items;
  
      let newItems = _.map(items , (item,index) => {
        if(item.id == updatedItem.id){
          item = {...item,quantity:updatedItem.quantity};
        }
        return item;
      })

      dispatch(updateItems(newItems));
  }
}

export const buyItems = () => {
  return (dispatch,getState) => {
      let customerName = getState().customer.customerName;
      let selectedItems = getState().customer.selectedItems;

      if(customerName==""){
          dispatch(setError("You must select customer name"));
      }else if(_.isEmpty(selectedItems)){
          dispatch(setError("No items added to cart to buy"));
      }else{
          _.map(selectedItems , (item,key) => {
            client.mutate({
              mutation : buyItemsMutation,
              variables: {
                customerName:customerName , itemId:item.id , quantity:item.quantity
              }
            }).then((result) => {
                console.log('created',result);             
            }).catch((err) => {
                console.log('not created',err);             
            });
          });

          let emptyObject = {};
          dispatch(resetSelectedItems(emptyObject));
      }
      
  }
}

const ACTION_HANDLERS = {
  [SET_CUSTOMER_ARRAY] : (state,action) => {
    return update(state, {customers : {$set : action.data}});
  },
  [UPDATE_ITEMS] : (state,action) => {
    return update(state, {items : {$set : action.data}});
  },
  [UPDATE_SELETCTED_ITEMS] : (state,action) => {
    let newState = update(state, {selectedItems : {[action.data.key] : {$set : action.data.value}}});
    return newState;     
  },
  [UPDATE_CUSTOMER_INFO] : (state,action) => {
    let newState = update(state, {customerName : {$set:action.data.customerName}});
    return newState;
  },
  [RESET_SELECTED_ITEMS] : (state,action) => {
    return update(state, {selectedItems : {$set:action.data}});
  },
  [SET_ERROR] : (state,action) => {
    return update(state, {error : {$set:action.data}});
  },
}

const initialState = {
  customers:[],
  items:[],
  selectedItems:{},
  customerName:"",
  error:""
}


export default function counterReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
  }
  
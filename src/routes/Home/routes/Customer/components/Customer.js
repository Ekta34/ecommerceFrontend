import React from 'react'
import './Customer.scss'
import _  from 'lodash'
import ItemCard from './ItemCard/ItemCard';
import SelectDropdown from '../../../../../components/UIelements/SelectDropdown'

class Customer extends React.Component{

    constructor(props){
        super(props);
    }

    componentWillMount = () => {
      this.props.initializeCustomersArray();
      this.props.initializeItemsArray();
    }
  
    updateCustomerInfo = (param) => {
      this.props.updateCustomerInfo(param);
      this.props.setError("");
    }

  render(){
    
    if(this.props.children){
      return this.props.children;
    }else{
          
      return(
        <div className="customerContainer">
          <div className="customerName">
            <SelectDropdown options={this.props.customers}
                            label="Enter Name : "
                            name="customerName"
                            value={this.props.customerName}
                            onChange={this.updateCustomerInfo}
            />
          </div>
          <div className="cartContainer">
            <div className="cartHeader">Cart:</div>
              {
                _.map(this.props.selectedItems , (item,key) => {
                    return(
                      <div key={key} className="cartItem">
                          <div className="cartItemName">{`${item.name}  :  `}</div>
                          <div className="cardItemQuantity">{item.quantity}</div>
                      </div>
                    )
                })
              }
            <div className="proceed" onClick={this.props.buyItems}>
              <div className="proceedText">Proceed</div>
            </div>
            <div className="error">
            {
              this.props.error!="" ? this.props.error : null
            }
            </div>
          </div>
          {
              _.map(this.props.items, (item,index)=> {
                return(
                  <ItemCard key={index} item={item} 
                            updateQuantity={this.props.updateQuantity}
                            updateSelectedItems={this.props.updateSelectedItems}
                            setError={this.props.setError} />
                )  
              })
          }
        </div>
      )
    }
    
  }
}

export default Customer

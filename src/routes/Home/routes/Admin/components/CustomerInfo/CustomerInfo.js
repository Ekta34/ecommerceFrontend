import React from 'react'
import './CustomerInfo.scss'
import {Grid, Row, Col} from 'react-bootstrap'

class CustomerInfo extends React.Component{

    constructor(props){
        super(props);
    }
  
  render(){
    return(
      <div className="customerInfoContainer">
          <div className="customerName">
              {this.props.data.name}
          </div>
          <div className="customerInfo">
            {
                _.map(this.props.data.items , (item,index) => {
                  return(
                    <div key={index} className="item">
                      <div className="selectedItemName">{`${item.name} : `}</div>
                      <div className="selectedItemQuantity">{item.quantity}</div>
                    </div>
                  )
                })
            }
          </div>
      </div>
    )
  }
}

export default CustomerInfo

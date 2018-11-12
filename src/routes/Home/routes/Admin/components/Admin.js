import React from 'react'
import './Admin.scss'
import _ from 'lodash'
import CustomerInfo from './CustomerInfo/CustomerInfo'

const customerData = [
  {
    name:"Ekta",
    selectedItems:[
      {
        name:"Salt",
        quantity:2
      },
      {
        name:"Sugar",
        quantity:4
      }
    ]
  },
  {
    name:"Mansi",
    selectedItems:[
      {
        name:"Salt",
        quantity:6
      },
      {
        name:"Sugar",
        quantity:4
      },
      {
        name:"book",
        quantity:5
      }
    ]
  }
]

class Admin extends React.Component{

    constructor(props){
        super(props);
    }
  
  render(){
    
    return(
      <div className="adminContainer">
          {
            _.map(this.props.customerFeed.customerFeed , (data,index) => {
              return(
                <CustomerInfo key={index} data={data} />
              )
            })
          }
      </div>
    )
  }
}

export default Admin

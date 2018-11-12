import React from 'react'
import './Cart.scss'

const selectedIetms = [
  {
    id:1,
    name:"Salt",
    quanity:4
  },
  {
    id:2,
    name:"Sugar",
    quanity:2
  },
  {
    id:3,
    name:"book",
    quanity:6
  }
]
class Cart extends React.Component{

    constructor(props){
        super(props);
    }
  
  render(){
    return(
      <div className="cartContainer">
         <div className="cartHeader">Your selected Items:</div>
            {
              _.map(selectedIetms , (item,index) => {
                  return(
                    <div className="cartItem">
                        <div className="cartItemName">{`${item.name}  :  `}</div>
                        <div className="cardItemQuantity">{item.quanity}</div>
                    </div>
                  )
              })
            }
          <div className="proceed">
            <div className="proceedText">Proceed</div>
          </div>
      </div>
    )
  }
}

export default Cart

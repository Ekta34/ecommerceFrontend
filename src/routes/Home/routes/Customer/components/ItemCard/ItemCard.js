import React from 'react'
import './ItemCard.scss'
import SelectDropdown from '../../../../../../components/UIelements/SelectDropdown'
import {Grid, Row, Col} from 'react-bootstrap'

const quantitySelectDropDown = [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
]
class ItemCard extends React.Component{

    constructor(props){
        super(props);
    }

    updateQuantity = (obj) => {
      let param = {
        id:this.props.item.id,
        quantity:obj.quantity
      }
      this.props.updateQuantity(param);
    }

    addToCart = () => {
      if(this.props.item.quantity!=0){
        let param = {
          key : this.props.item.id,
          value : {
            id: this.props.item.id,
            name:this.props.item.name,
            quantity:this.props.item.quantity
          }
        };      
        this.props.updateSelectedItems(param);
        this.props.setError("");
      }  
    }
  
  render(){
        
    return(
      <Grid className="itemCardContainer">
        <Row>
          <Col xs={12} sm={12} md={4} className="itemName">{this.props.item.name}</Col>
          <Col xs={12} sm={12} md={4}  className="quantitySelector"> 
            <SelectDropdown options={quantitySelectDropDown}
                            label="Quantity"
                            name="quantity"
                            value={this.props.item.quantity}
                            onChange={this.updateQuantity}
                
            />
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div className="addToCartButton" onClick={this.addToCart}>
              <div className="addToCartButtonText">Add to Cart</div>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ItemCard

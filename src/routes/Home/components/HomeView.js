import React from 'react'
import './HomeView.scss'
import { browserHistory } from 'react-router'

class HomeView extends React.Component{

  constructor(props){
    super(props);
  }

  goToAdminPage = () => {
    browserHistory.push('/admin');
  }

  gotToCustomerPage = () => {
    browserHistory.push('/customer');
  }
  
  render(){

    if(this.props.children){
      return this.props.children
    }else{
      return(
        <div className="homeContainer">
            <div className="admin" onClick={()=>this.goToAdminPage()}>Admin</div>
            <div className="customer" onClick={()=>this.gotToCustomerPage()}>Customer</div>
        </div>
      )
    }
    
  }
}

export default HomeView

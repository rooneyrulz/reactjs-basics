import React, { Component } from 'react';
import './customer.css';

class Customer extends Component {

   onDelete() {
      this.props.onDelete(this.props.customer);
   }

   render () {
      return (
         <div className="card-panel cyan darken-3">
            <span onClick={this.onDelete.bind(this)} className="btn-close">&times;</span>
            <ul className="collection">
               <div className="customerName">
                  <li className="collection-item">
                     <div>
                        <strong>Name</strong>
                        <span className="right"> {this.props.customer.name} </span>
                     </div>
                  </li>
               </div>
               <div className="customerEmail">
                  <li className="collection-item">
                     <div>
                        <strong>Email</strong>
                        <span className="right"> {this.props.customer.email} </span>
                     </div>
                  </li>
               </div>
               <div className="customerUsername">
                  <li className="collection-item">
                     <div>
                        <strong>Username</strong>
                        <span className="right"> {this.props.customer.username} </span>
                     </div>
                  </li>
               </div>
               <div className="customerContactInfo">
                  <li className="collection-item">
                     <div>
                        <strong>Contact Info</strong>
                        <span className="right"> {this.props.customer.contactInfo} </span>
                     </div>
                  </li>
               </div>
               <div className="customerCountry">
                  <li className="collection-item">
                     <div>
                        <strong>Country</strong>
                        <span className="right"> {this.props.customer.country} </span>
                     </div>
                  </li>
               </div>
               <div className="customerProfession">
                  <li className="collection-item">
                     <div>
                        <strong>Profession Status</strong>
                        <span className="right"> {this.props.customer.profession} </span>
                     </div>
                  </li>
               </div>
            </ul>
         </div>
      );
   }
}

//Export Component
export default Customer;

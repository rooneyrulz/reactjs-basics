import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Customer from '../Customer/Customer';
import AddCustomer from '../AddCustomer/AddCustomer';

class App extends Component {
   constructor(props) {
      super();
      this.state = {
         customerInfo: [],
         pageHeading: "My React App"
      };
   };

   onHandleHeading(newHeading) {
      this.setState({
         pageHeading: newHeading
      });
   };

   componentWillMount() {
      this.setState({
         customerInfo: [
            {
               name: "Antoney",
               email: "antoney@ant.com",
               username: "antoney",
               contactInfo: 74583754837,
               country: "UK",
               profession: "Web designer"
            },
            {
               name: "Jery",
               email: "jery@gym.com",
               username: "jery",
               contactInfo: 475843753873,
               country: "Canada",
               profession: "Web developer"
            },
            {
               name: "Nikki Bella",
               email: "nikki@bellas.com",
               username: "nikki",
               contactInfo: 263276276323,
               country: "Arizona",
               profession: "Wrestler"
            },
            {
               name: "Zyn",
               email: "zyn@zee.com",
               username: "zyn",
               contactInfo: 5698954854958,
               country: "German",
               profession: "Data Scientist"
            }
         ]
      });
   };

   onDeleteCustomer(customer) {
      let newCustomers = this.state.customerInfo.filter((val, i) => {
         return customer != val;
      });
      //Set state
      this.setState({
         customerInfo: newCustomers
      });
   };

   onMakeCustomer(name, email, username, contact, country, prof) {
      let newCustomers = this.state.customerInfo;
      newCustomers.push({
         name: name,
         email: email,
         username: username,
         contactInfo: contact,
         country: country,
         profession: prof
      });
      //Set state
      this.setState({
         customerInfo: newCustomers
      });
   };

   render () {
      let customers = this.state.customerInfo.map(customer => {
         return <Customer onDelete={this.onDeleteCustomer.bind(this)} customer={customer} key={customer.contactInfo} />
      });
      return (
         <div>
            <Header heading={this.state.pageHeading}/>
            <section>
               <div className="container" >
                  {customers}
                  <AddCustomer onChange={this.onHandleHeading.bind(this)} onAdd={this.onMakeCustomer.bind(this)}/>
               </div>
            </section><br/><br/>
         </div>
      );
   }
}

//Export App Component
export default App;

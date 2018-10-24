import React, { Component } from 'react';

class AddCustomer extends Component {
   constructor(props) {
      super();
      this.state = {
         country: [],
         heading: ""
      };
   };

   componentWillMount() {
      this.setState({
         heading: "It's My React App"
      });
   };

   onHandleChange() {
      this.props.onChange(this.state.heading);
   };

   onHandleCustomer (e) {
      e.preventDefault();

      let name = this.refs.name.value;
      let email = this.refs.email.value;
      let username = this.refs.username.value;
      let contact = this.refs.contact.value;
      let country = this.refs.country.value;
      let prof = this.refs.prof.value;

      if (name === "" || email === "" || username === "" || contact === "" || country === "" || prof === "") {
         alert("Please fill out the all fields");
      } else {
         this.props.onAdd(name, email, username, contact, country, prof);
      }

      this.refs.name.value = null;
      this.refs.email.value = null;
      this.refs.username.value = null;
      this.refs.contact.value = null;
      this.refs.country.value = null;
      this.refs.prof.value = null;
   };

   render () {
      let country = this.state.country.map(country => {
         return <option key={country} value={country}> {country} </option>
      });
      return (
         <form className="" id="form-addcustomer" onSubmit={this.onHandleCustomer.bind(this)}>
            <button onClick={this.onHandleChange.bind(this)} type="button" className="btn red darken-2">Change Heading</button>
            <h4 className="center cyan-text text-darken-3">Add Some Customers</h4>
            <div className="input-field">
               <input id="name" type="text" ref="name"/>
               <label for="name">Name</label>
            </div>
            <div className="input-field">
               <input className="validate" id="email" type="email" ref="email"/>
               <label for="email">Email</label>
            </div>
            <div className="input-field">
               <input id="username" type="text" ref="username"/>
               <label for="username">Username</label>
            </div>
            <div className="input-field">
               <input id="contact" type="text" ref="contact"/>
               <label for="contact">Contact Info</label>
            </div>
            <div className="input-field">
               <input id="country" type="text" ref="country"/>
               <label for="country">Country</label>
            </div>
            <div className="input-field">
               <input id="prof" type="text" ref="prof"/>
               <label for="prof">Profession Status</label>
            </div>
            <button type="submit" className="btn cyan darken-4 white-text">MAKE CUSTOMER</button>
         </form>
      );
   }
}

//Export Component
export default AddCustomer;

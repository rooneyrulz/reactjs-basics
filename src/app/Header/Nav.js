import React, { Component } from 'react';

class Nav extends Component {
   render () {
      return (
         <li>
            <a> {this.props.nav} </a>
         </li>
      );
   }
}

//Export Component
export default Nav;

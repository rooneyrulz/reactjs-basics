import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
   constructor (props) {
      super();
      this.state = {
         navbarNavs: []
         //newHeading: props.heading
      };
   };

   componentWillMount() {
      this.setState({
         navbarNavs: ["Home", "Search", "Follow", "Contact", "About", "Signup", "Login"]
      });
   };

   render () {
      let navs = this.state.navbarNavs.map((nav, i) => {
         return <Nav nav={nav} key={i} />;
      });
      return (
         <div className="navbar-fixed">
            <nav className="black">
               <div className="container">
                  <div className="nav-wrapper">
                     <a href="#!" className="brand-logo">{this.props.heading}</a>
                     <a href="#mobile-nav" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                     </a>
                     <ul className="right hide-on-med-and-down">
                        {navs}
                     </ul>
                  </div>
               </div>
            </nav>
            <ul className="sidenav" id="mobile-nav">
               {navs}
            </ul>
         </div>
      );
   }
}

//PropTypes
Header.propTypes = {};

//Export Component
export default Header;

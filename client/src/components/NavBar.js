import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      {/* home route */}
      <Link to="/">Restroom Radar NYC</Link>
      {/* Master list of bathrooms + the ones created */}
      <Link to="/bathrooms">NYC Bathrooms</Link>
      {/* Create bathroom */}
      <Link to="/add-bathroom">Add a New Bathroom</Link>
      {/* form to contact if any questions, suggestion, reports */}
      <Link to="/contact-us">Contact Us</Link>
    </nav>
  );
}

export default NavBar;
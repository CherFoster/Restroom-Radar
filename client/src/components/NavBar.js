import { Link } from 'react-router-dom';

function NavBar({loggedIn, logout}) {
  const displayedLinks = loggedIn ? <>
  <nav className='navbar'>
      <Link to="/">Restroom Radar NYC</Link>
      <Link to="/bathrooms">NYC Bathrooms</Link>
      <Link to="/add-bathroom">Add a New Bathroom</Link>
      <Link to="/logout">Log Out</Link>
  </nav>
  </>:<>
  <nav>
      <Link to="/signup">Sign Up</Link>
      <br/>
      <Link to="/login" onClcik={logout}>Log In</Link>
  </nav>
  </>
  
  return (
    <nav className='navbar'>
      <h1>WELCOME TO RESTROOM RADAR NYC</h1>
      {displayedLinks}
    </nav>
  );
}

export default NavBar;
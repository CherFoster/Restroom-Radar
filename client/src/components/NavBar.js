import { Link, useNavigate } from 'react-router-dom';

function NavBar({loggedIn, setCurrentUser, setLoggedIn}) {

  const navigate = useNavigate();

  // this might be in complete!!!!!!!!!!!!!!!!! REGINA SCREAM!
  const logout = ()=> {
    setCurrentUser(null);
    setLoggedIn(false);
    navigate("/signup")
  }

  const displayedLinks = loggedIn ? <>
  <nav className='navbar'>
      <Link to="/">Restroom Radar NYC</Link>
      <Link to="/bathrooms">NYC Bathrooms</Link>
      <Link to="/add-bathroom">Add a New Bathroom</Link>
      <Link to="/" onClick={logout}>Log Out</Link>
  </nav>
  </>:<>
  <nav>
      <Link to="/signup">Sign Up</Link>
      <br/>
      <Link to="/login">Log In</Link>
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
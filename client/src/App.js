import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Bathrooms from './components/Bathrooms';
import CreateBathroom from './components/CreateBathroom';
import NavBar from './components/NavBar';
import BathroomDetails from "./components/BathroomDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [data, setData] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  const login = (user) => {
    setCurrentUser(user);
    setLoggedIn(true);
  }

  useEffect(() => {
    fetch("/bathrooms")
    .then(resp => resp.json())
    .then(data => setData(data))
  }, [])

  return (
    <Router>
      <NavBar setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bathrooms" element={<Bathrooms />} />
        <Route path="/signup" element={<Signup login={login}/>} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/add-bathroom" element={<CreateBathroom />} />
        <Route path="/bathroom/:id" element={<BathroomDetails data={data}/>} />
      </Routes>
    </Router>
  );
}

export default App;
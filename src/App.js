import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import {originals,action,comedy,romantic,horror} from './Components/urls'

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Banner/>
      <Rowpost url={originals} title='Netflix Orginals'/>  
      <Rowpost url={action} title='Action Movies' isSmall/>   
      <Rowpost url={comedy} title='Comedy Movies' isSmall/>   
      <Rowpost url={romantic} title='Romantic Movies' isSmall/>   
      <Rowpost url={horror} title='Horror Movies' isSmall/>  
      <div className="footer">

        <img className="mobimg" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
        <h2 className="mobtext">Download your shows to watch offline.</h2>
        <h2 className="mobdescription">Save your favourites easily and always have something to watch.</h2>
        </div> 




      
    </div> 
  );
}

export default App;

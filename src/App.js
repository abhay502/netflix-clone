import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import Footer from "./Components/footer/Footer";
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
      <Footer/>
    </div> 
  );
}

export default App;

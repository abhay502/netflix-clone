import React from 'react'
import './Navbar.css'

function NavBar() { 
  return (
    <div className='navbar'>
      
     <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
     <div className="navbartext">
          <h5 className='navtext'>Home</h5>
          <h5 className='navtext'>Series</h5>
          <h5 className='navtext'>Movies</h5>
          <h5 className='navtext'>Originals</h5>
          <h5 className='navtext'>Recently Added</h5>
          <i id='search' class="fa-solid fa-magnifying-glass"></i>
          <h5 className='textright'>KIDS</h5>
          <h5 className='textright'>DVD </h5>
          <h5 id='textright' class="fa-solid fa-bell">  </h5>
          <i id='drop' class="fa-sharp fa-solid fa-caret-down"></i> 

     </div>
     
     
     <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Avatar" />
    </div>
  )
}

export default NavBar
import React, { useState } from 'react';
import './Menu.css'; // Import CSS for styling



const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
    
      <header className="MenuItem">
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          ALL
        </div>
        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
          <div className="menu-item"> <select><option>About Us</option></select> </div>
          <div className="menu-item"> <select><option>Learn with Safe</option></select> </div>
          <div className="menu-item"> <select><option>Blogs</option></select> </div>
          <div className="menu-item"> <select><option>News</option></select> </div>
          <div className="menu-item"> <select><option>Safe Partner Program</option></select> </div>
          <div className="menu-item"> <select><option>Tutorials</option></select> </div>
          <div className="menu-item"> <select><option>Ventures By Safe</option></select> </div>
          <div className="menu-item"> <select><option>Contact Us</option></select> </div>
           
          <span className='phone'> Need Help? Reach Us <br/> ☎ +91 98 71667890

             </span>
        </div>
      </header>
    );
  };
  
  export default Menu;
import React from 'react';
import './Header.css'; // Import CSS for styling
import Logoimages from '../assest/images.png'
import Logolocation from '../assest/location.jpg'
import Languagelogo from '../assest/Languagelogo.png'
import CurrencyLogo from '../assest/CurrencyLogo.png'
import UserImage from '../assest/UserLogo.png'
import CartLogo from '../assest/Shoppingcart.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={Logoimages} alt="Logo"  />
      </div>
      <div className="location-selector">
        <img src={Logolocation} alt='location' />
      </div>
      <div className="language-converter">
        <img src={Languagelogo} alt='language logo' />
      </div>
      <div className="currency-converter">
      <img src={CurrencyLogo} alt='language logo' />
      </div>
        
      <div className="search-bar">
        <select className="dropdown">
          <option value="option1">product 1</option>
          <option value="option2">prdoduct 2</option>
          <option value="option3">product 3</option>
        </select>
        <input type="text" placeholder="Search Product By Name,Number etc." />
        <div className="search-icon">⌕</div>
      </div>

      <div className="login-button">
        <img src={UserImage} alt='userlogo'/>
        <select className='login-logout'>
            <option value="login">Login</option>
            <option value="Register">Not Registertered? SignUp Now</option>
        </select>
      </div>
      <div className='wish'>
      ❤️<br />
      Wishlist
      </div>
      <div className="cart">
        <img src={CartLogo} alt='cartlogo' />
        <br />
      Cart
      </div>
    

    </header>
  );
};

export default Header;

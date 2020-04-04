import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className='header'>
      <nav>
        <span>Facebook</span>
        <div>
          Meu perfil
          <i>
            <span class='material-icons'>account_circle</span>
          </i>
        </div>
      </nav>
    </header>
  );
}
export default Header;

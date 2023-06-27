// import React from 'react'

function Navbar() {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <h1>Portfolio</h1>

          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-text">
        <p>Web Developer</p>
        <h1>
          Hello, I am <span>Prabhuram</span>Karki
        </h1>
      </div>
    </div>
  );
}

export default Navbar;

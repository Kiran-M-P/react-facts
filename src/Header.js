import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img className="img" src="logo192.png" alt="react-logo" />
          <h3 className="logo-txt">React</h3>
        </div>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

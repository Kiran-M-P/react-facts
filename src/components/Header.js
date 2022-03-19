import reactLogo from "../images/logo192.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img className="img" src={reactLogo} alt="react-logo" />
          <h3 className="logo-txt">ReactFacts</h3>
        </div>
        <p className="nav-txt">React Course - Project 1</p>
      </nav>
    </header>
  );
}

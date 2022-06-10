export default function HeaderComponent() {
  return (
    <header className="header">
      <nav className="navbar">
        {/* <img className="logo" src={require('../assets/react-logo.png')} alt="React logo" /> */}
        <img className="logo" src="/assets/images/react-logo.png" alt="React logo" />
        <ul className="nav-items">
          <li>
            Pricing
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  )
}
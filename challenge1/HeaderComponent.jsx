export default function HeaderComponent() {
  return (
    <header className="header">
      <nav className="navbar">
        <img className="logo" src="./react-logo.png" alt="React logo" />
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
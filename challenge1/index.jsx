function TestComponent() {
  return (
    <div>
      <img className="logo" src="./react-logo.png" alt="React logo" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

function HeaderComponent() {
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

function FooterComponent() {
  return (
    <footer className="footer">
      <small>© 2022 Martinez development. All rights reserved.</small>
    </footer>
  )
}

function MainComponent() {
  return (
    <div className="main-content">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be 
        able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
        if I know React</li>
      </ol>
    </div>
  )
}

function AppComponent() {
  return (
      <div className="flex-wrapper">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
  )
}

ReactDOM.render(<AppComponent />, document.getElementById("root"))
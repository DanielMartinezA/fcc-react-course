import HeaderComponent from "./HeaderComponent"

/*s
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
*/

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

// function HeaderComponent() {
//   return (
//     <header className="header">
//       <nav className="navbar">
//         <img className="logo" src="./react-logo.png" alt="React logo" />
//         <ul className="nav-items">
//           <li>
//             Pricing
//           </li>
//           <li>
//             About
//           </li>
//           <li>
//             Contact
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

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
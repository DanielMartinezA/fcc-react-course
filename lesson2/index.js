const h1 = document.createElement("h1")
h1.textContent = "Hi, my name is Daniel"
h1.className = "header"
console.log(h1);
// document.getElementById("root").append(h1)

const elem = <h1 className="header">Hi, my name is Daniel.</h1>
console.log(elem); // it's a js object
ReactDOM.render(elem, document.getElementById("root"))
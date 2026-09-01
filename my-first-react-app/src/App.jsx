import Home from "./Home.jsx";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Aboutclass from "./Components/Aboutclass.jsx";
import Homeclass from "./Components/Homeclass.jsx";
//Functional component

function App() {
  return(
    <>
  <h2>Welcome to React</h2>
  <p>This is a simple React app.</p>
  <Home/>
  <About/>
  <Contact/>
  <Homeclass/>
  <Aboutclass/>
  <h3>Thank you!</h3>
  </>
  )
}

export default App;
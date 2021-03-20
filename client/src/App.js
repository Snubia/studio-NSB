import logo from './logo.svg';
import './App.css';
import Navigation from "./Navbar";
import React, { Component, } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactForm from './components/ContactForm/Contact-Form';
import "./App.css";
//import Body from './components/Body/Body';
import Main from './components/Main/Main';
import Body from './components/Body/Body';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Error from './components/Error';

// function App() {
//   return (
//     <div className="App">
//        <Navigation />
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
          <Body />
          <Main />
          <ContactForm />
            {/* <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch> */}
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;

// import React, { Component, } from "react";
// //import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./Navbar";
// //import Section from "./Section";
// //import dummyText from "./DummyText";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
        
        
//       </div>
//     );
//   }
// }

// export default App;

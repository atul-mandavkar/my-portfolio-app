//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeMain from './components/HomeMain';
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/homeMain">
            <Navbar />
            <HomeMain />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

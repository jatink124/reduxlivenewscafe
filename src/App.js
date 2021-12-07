import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Navigation from "./Components/Navbar";
import Entertainment from "./pages/Entertainment/Entertainment";
import India from "./pages/India/India";
import Technology from "./pages/Technology/Technology";
import World from "./pages/World/World";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
    <Navigation/>
    
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/Entertainment" component={Entertainment} />
          <Route path="/India" exact component={India} />
          <Route path="/Technology" exact component={Technology} />
          <Route path="/World" exact component={World} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;

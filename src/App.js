import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevTools } from "react-query/devtools";
import ProductListing from "./containers/ProductListing";
// import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Navigation from "./Components/Navbar";
import Entertainment from "./pages/Entertainment/Entertainment";
import India from "./pages/India/India";
import Technology from "./pages/Technology/Technology";
import World from "./pages/World/World";
import { News } from "./News";
import Footer from "./Components/Footer/Footer";
import FocussedCard from "./Components/SubComponents/FocussedCard";
import Test from "./Components/Test/Test";
import Design1 from "./Components/Test/Design1";
import Blog from "./Components/Blog";
// import("./Components/Footer/Footer");

// const Footer = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve, 20 * 1000)).then(
//     () =>
//     import("./Components/Footer/Footer")

//   );
// });
//const Navigation = React.lazy(() => import('./Components/Navbar'));
//const ProductListing = React.lazy(() => import('./containers/ProductListing'));
//const ProductDetails = React.lazy(() => import('./containers/ProductDetails'));
//const Footer = React.lazy(() => import('./Components/Footer/Footer'));
function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            
            <Route path="/" exact component={Blog} />
            <Route path="/Entertainment" component={Entertainment} />
            <Route path="/India" exact component={India} />
            <Route path="/Technology" exact component={Technology} />
            <Route path="/World" exact component={World} />
            <Route path="/news/:id" component={ProductDetails} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </Suspense>

      {/* <News/> */}
    </div>
  );
}

export default App;

import Navbar from "../src/headFiles/Navbar"
import Home from "../src/headFiles/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "../src/headFiles/Create";
import Contact from "../src/headFiles/Contact";
import BlogDetails from "./BlogDetails/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

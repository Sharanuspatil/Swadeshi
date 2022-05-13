import "./App.css";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/Blog">
          <Home />
        </Route>

        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

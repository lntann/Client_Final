import Homepage from "./page/homepage/Homepage";
import TopBar from "./components/topbar/TopBar";
import Single from "./page/single/Single";
import Write from "./page/write/Write";
import Settings from "./page/settings/Settings";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useContext } from "react";
import {  AuthContext  } from "./context/AuthContext";

function App() {
  const { user } = useContext( AuthContext );
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/register">{user ? <Homepage /> : <Register />}</Route>
        <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
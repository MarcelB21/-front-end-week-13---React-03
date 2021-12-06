import React, { useState } from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import Overview from "./Pages/Overview";
import Blogpost from "./Pages/Blogpost";
import {useHistory} from "react-router-dom";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    const history = useHistory()

    function signOut() {
        toggleIsAuthenticated(false);
        history.push("/")
    }

  return (
    <div>
      Maak hier jouw prachtige blog-applicatie!
        <nav>
            <ul>
                <li><NavLink to="/">Homepage</NavLink></li>
                <li><NavLink to="/login">Login page</NavLink></li>
                {isAuthenticated ?
                    <>
                        <li><NavLink to="/blogposts">Overview</NavLink></li>
                        <button type="button" onClick={signOut}>Uitloggen</button>
                    </>
                    : ""}
                {/*<li><NavLink to="/blogpost/:blogId">Blogpost <= werkt NIET</NavLink></li>*/}
            </ul>
        </nav>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>

            <Route exact path="/login">
                <LoginPage toggleAuth={toggleIsAuthenticated}/>
            </Route>


            <Route path="/blogposts">
                <Overview />
            </Route>

            <Route exact path="/blogpost/:blogId">
                <Blogpost />
            </Route>
        </Switch>
    </div>
  );
}

export default App;

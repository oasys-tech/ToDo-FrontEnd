import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from "./Example";

function Main() {
    return (
        <Router>
            <main>
                <Switch>
                    <Route path="/" exact component={Example} />
                    <Route path="/test" exact component={Example} />
                </Switch>
            </main>
        </Router>
    );
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById("app"));

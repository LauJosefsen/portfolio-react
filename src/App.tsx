import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import { ViewProject } from "./pages/projects/view_project";

function App() {
    return (
        <Router>
            <Wrapper>
                <Sidebar />
                <div className="content">
                    <Switch>
                        <Route exact path={`/`} component={About} />

                        <Route path="/projects/:id" component={ViewProject} />
                        <Route path={`/projects`} component={Projects} />
                        <Redirect to={"/"} />
                    </Switch>
                </div>
                <Footer />
            </Wrapper>
        </Router>
    );
}

export default App;

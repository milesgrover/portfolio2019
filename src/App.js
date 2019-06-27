import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {  ArtPage, DesignPage, HomePage, TechPage } from './pages';
import "./App.scss";

function App() {
  return (
    <Router>
      <Route exact path="/tech" component={TechPage} />
      <Route exact path="/tech/:id" component={TechPage} />
      <Route exact path="/design" component={DesignPage} />
      <Route exact path="/art" component={ArtPage} />
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Nav />
        <main>
          <h2>&#10132; This is the place for the main content &#10132;</h2>
        </main>
      </div>
    );
  }
}

export default App;

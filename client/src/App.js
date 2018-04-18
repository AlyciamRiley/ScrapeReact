import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  render () {
    return (
      <Wrapper>
          <Header />
          <Search />
        </Wrapper>
    );
  }





}

export default App;

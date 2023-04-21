import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;

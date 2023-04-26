import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css"
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }

  toggleModal = () => {
    this.setState({showModal: this.state.showModal ? false : true})
  }

  setSelectedBeast = (beast) => {
    this.setState({selectedBeast: beast})
  }

  render() {
    return (
      <>
        <Header />
        <Main 
          data={data}
          toggleModal={this.toggleModal}
          setSelectedBeast={this.setSelectedBeast}
        />
        <SelectedBeast 
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </>
    )
  }
}

export default App;

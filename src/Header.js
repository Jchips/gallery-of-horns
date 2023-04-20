import React from "react";

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      header: 'Horned Beasts',
      originalHeader: true
    }
  }
  toggleHeader = () => {
    // this.setState({header: 'You clicked on \'Horned Beasts\''});
    this.setState({originalHeader: !this.state.originalHeader});
  }
  render() {
    return(
      <>
        <h1 onClick={this.toggleHeader}>{this.state.header === true ? 'Horned Beasts' : '🦄🦏 👹s'}</h1>
      </>
    )
  }
}

export default Header;
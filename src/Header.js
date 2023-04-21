import React from "react";

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      header: true,
    }
  }
  toggleHeader = () => {
    this.setState({header: !this.state.header});
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
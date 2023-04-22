import React from "react";
import HornedBeast from "./HornedBeast";
import Col from 'react-bootstrap/Col';

class Main extends React.Component{
  render() {
    return(
      <>
      <div className="all-beasts">
        {/* creates a HornedBeast component for each object in the json file */}
          {this.props.data.map((beast, index) =>
            <Col key={index}>
              <HornedBeast
                beast={beast}
                toggleModal={this.props.toggleModal}
                setSelectedBeast={this.props.setSelectedBeast}>
              </HornedBeast>
            </Col>
          )}
      </div>
      </>
    )
  }
}

export default Main;
import React from "react";
import HornedBeast from "./HornedBeast";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: this.props.data
    }
  }

  filter = (e) => {
    e.preventDefault();
    // console.log(this.state.filterData);
    if (e.target.value === '1'){
      this.setState({filterData: this.props.data.filter(beast => beast.horns === 1)});
    } else if (e.target.value === '2') {
      this.setState({filterData: this.props.data.filter(beast => beast.horns === 2)});
    } else if (e.target.value === '3') {
      this.setState({filterData: this.props.data.filter(beast => beast.horns === 3)});
    } else if (e.target.value === '100') {
      this.setState({filterData: this.props.data.filter(beast => beast.horns === 100)});
    } else {
      this.setState({filterData: this.props.data});
    }
    console.log('user\'s choice', e.target.value);
  }

  render() {
    console.log(this.state.filterData);
    return (
      <>
        <Form.Select aria-label="Filter by number of horns" onChange={this.filter}>
          <option>All horned beasts</option>
          <option value="1">Beasts with 1 horn</option>
          <option value="2">Beasts with 2 horns</option>
          <option value="3">Beasts with 3 horns</option>
          <option value="100">Beasts with 100 horns</option>
        </Form.Select>
        <div className="all-beasts">
          {/* creates a HornedBeast component for each object in the json file */}
          {this.state.filterData.map((beast, index) => (
            <Col key={index}>
              <HornedBeast
                beast={beast}
                toggleModal={this.props.toggleModal}
                setSelectedBeast={this.props.setSelectedBeast}
              ></HornedBeast>
            </Col>
          ))}
        </div>
      </>
    );
  }
}

export default Main;

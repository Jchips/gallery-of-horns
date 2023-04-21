import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      favoriteCount: 0
    }
  }
  favorites = () => this.setState({favoriteCount: this.state.favoriteCount + 1});
  render() {
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.img} alt={this.props.title} title={this.props.title} onClick={this.favorites}/>
          <Card.Body>
            <Card.Title>{this.props.description}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Footer>{this.state.favoriteCount} ❤️</Card.Footer>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
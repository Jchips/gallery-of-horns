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

  handleShowModal = () => {
    this.props.toggleModal();
    this.props.setSelectedBeast(this.props.beast);
  }

  favorites = () => this.setState({favoriteCount: this.state.favoriteCount + 1});
  render() {
    return(
      <>
        <Card style={{ width: '18rem' }} onClick={this.handleShowModal}>
          <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.title} title={this.props.beast.title} onClick={this.favorites}/>
          <Card.Body>
            <Card.Title>{this.props.beast.title}</Card.Title>
            <Card.Text>{this.props.beast.description}</Card.Text>
            <Card.Text>{this.state.favoriteCount} ❤️</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
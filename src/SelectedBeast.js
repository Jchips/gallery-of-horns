import React from "react";
import { Modal } from "react-bootstrap";

class SelectedBeast extends React.Component{
  handleClose = () => {
    this.props.toggleModal();
  }
  render() {
    console.log('show modal', this.props.showModal);
    return (
      <Modal show={this.props.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title}/>
          <p>{this.props.selectedBeast.description}</p>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;
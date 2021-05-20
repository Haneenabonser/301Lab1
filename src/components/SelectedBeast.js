import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class SelectedBeast extends React.Component {

    
    handleClose = () =>{
        this.props.handleClose();
    };

    render() {

        return (
            <>
                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selected.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.selected.image_url} alt={this.props.selected.title} style={{ height: '15rem'}}></img>
                        <p>{this.props.selected.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </>

        )
    }
}


export default SelectedBeast;
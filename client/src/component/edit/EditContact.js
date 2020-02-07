import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import{editContact}from'../../action/Action'
 class EditContact extends Component {
    state = {
        show: false,
        _id: this.props.contactList._id,
        name: this.props.contactList.name,
        telephone: this.props.contactList.telephone,
        email: this.props.contactList.email,

        }

    handleShow = () => {
        this.setState({ show: true });
    };
    handleClose = () => {
        this.setState({ show: false });
    };
    changEvent = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
     };
     setContact = (id) => {
         let newContact= {
             _id: this.state._id,
             name: this.state.name,
            telephone: this.state.telephone,
             email: this.state.email
         }
         this.props.editContact(id, newContact)
     }
    render() {
        return (
            <div>
                <>
                    <Button variant="" onClick={this.handleShow}>
                        Edit
                         </Button>

                    <Modal
                        show={this.state.show}
                        onHide={this.handleClose}
                        animation={false}
                    >
                        <Modal.Title>Edit Contact</Modal.Title>

                        <Modal.Body>
                            <input
                                className="value"
                                name="name"
                                onChange={this.changEvent}
                                value={this.state.name}
                            />
                        </Modal.Body>
                        <Modal.Body>
                            <input
                                className="value"
                                name="telephone"
                                onChange={this.changEvent}
                                value={this.state.telephone}
                            />
                        </Modal.Body>
                        <Modal.Body>
                            <input
                                className="value"
                                name="email"
                                onChange={this.changEvent}
                                value={this.state.email}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="primary"
                                onClick={() => 

                                {
                                    this.handleClose(); this.setContact(this.props.contactList._id); console.log(this.props.contactList._id, {
                                        name: this.state.name,
                                        telephone: this.state.telephone,
                                        email: this.state.email
                                    }) }}
            >
                Save Changes
                             </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
}
export default connect(null, { editContact })(EditContact)
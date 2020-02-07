import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import { addContact } from '../../action/Action';
class AddContact extends Component {
                 state = {
                   show: false,
                   name: "",
                   telephone: "",
                   email: ""
                 };
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
                 render() {
                   return (
                     <div>
                       <>
                         <Button variant="" onClick={this.handleShow}>
                           Add List
                         </Button>

                         <Modal
                           show={this.state.show}
                           onHide={this.handleClose}
                           animation={false}
                         >
                           <Modal.Title>Add Contact</Modal.Title>

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
                               variant="secondary"
                               onClick={this.handleClose}
                             >
                               Close
                             </Button>
                                       <Button
                               variant="primary"
                               onClick={() => { this.handleClose(); this.props.addContact({ id: Date.now, name: this.state.name, telephone: this.state.telephone, email: this.state.email }); }}
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

export default connect(null,{addContact})(AddContact)
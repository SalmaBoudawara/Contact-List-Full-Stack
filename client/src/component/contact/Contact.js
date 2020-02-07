import React, { Component } from 'react'
import './Contact.css'
import { connect } from 'react-redux';
import { deleteContact } from '../../action/Action';
import EditContact from '../edit/EditContact';
 class Contact extends Component {
    render() {
        return (
          <div className="contact">
            <h3>
              Contact name :<span> {this.props.contact.name}</span>
            </h3>
            <h3>
              Contact phone :<span>{this.props.contact.telephone}</span>
            </h3>
            <h3>
              Contact email:<span>{this.props.contact.email}</span>
            </h3>
            <div className="mod-del">
              <EditContact contactList={this.props.contact}/>
              <button onClick={()=>{this.props.deleteContact(this.props.contact._id)}}>Delete</button>
            </div>
          </div>
        );
    }
}
export default connect(null,{deleteContact})(Contact)
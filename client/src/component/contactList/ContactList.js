import React, { Component } from 'react'
import  './ContactList.css'
import Contact from '../contact/Contact'
import{getContact} from'../../action/Action'
import { connect } from 'react-redux'
class ContactList extends Component {
    componentDidMount() {
        this.props.getContact()
    };
    render() {
        return (
            <div className="listContact">
                {this.props.List.map((el) => (<Contact index={el.id} contact={el}/>))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
  List: state.lists
});
export default connect(mapStateToProps, { getContact })(ContactList);
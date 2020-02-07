import React from 'react';
import ContactList from './component/contactList/ContactList'
import AddContact from './component/addContact/AddContact'
import { Route,Link,Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="myApp">
        {/* <Redirect to="/" /> */}
        <Redirect to="/">
          <h1>Contact App</h1>
        </Redirect>
        <Link to="/" >
          
          <h1>Contact App</h1>
        </Link>

        <div className="button">
          <Link to={"/ContactList"}>
            <button>Contact List</button>
          </Link>
          <AddContact />
        </div>
      </div>
      <Route exact path="/ContactList" component={ContactList} />
    </div>
  );
}

export default App;

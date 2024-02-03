import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/navbar';
import Register from '../src/Components/Auth/RegisterLogin';
import AddContact from '../src/Components/Contacts/AddContact/addContact';
import ContactList from '../src/Components/Contacts/ContactList/contactList';
import EditContact from './Components/Contacts/EditContact/editContact';
import ViewContact from './Components/Contacts/ViewContact/viewContact';


let App = ()=>{
  return(
    <React.Fragment>
      <Navbar/>
        <Routes>
          <Route path={'/'} element={<Register/>}/>
          <Route path={'/contacts/add'} element={<AddContact/>}/>
          <Route path={'/contacts/list'}  element={<ContactList/>}/>
          <Route path={'/contacts/edit/:contactId'}  element={<EditContact/>}/>
          <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>

        </Routes>
    </React.Fragment>
  );
}

export default App;

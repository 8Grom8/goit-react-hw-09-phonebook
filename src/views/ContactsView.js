import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/Contacts/ContactList/ContactList"
import Filter from "../components/Contacts/Filter/Filter";
import ContactForm from "../components/Contacts/ContactForm/ContactForm";

import {
  getAllContacts,
  removeContact,
} from "../redux/contacts/contactsOperations";
import {
  // selectAllContacts,
  selectFilteredItems,
} from "../redux/contacts/contactsSelectors";


export default function ContactsView() {
  const dispatch = useDispatch();
  const items = useSelector(selectFilteredItems);
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  const removeNewContact = (id) => dispatch(removeContact(id));

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <List items={items} handleDelete={removeNewContact} />
    </div>
  );
}








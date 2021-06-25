// *********** Redux Toolkit *********** //

import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const addContact = createAction("phonebook/addContact", (contact) => {
  return {
    payload: {
      ...contact,
      id: uuid(),
    },
  };
});
const removeContact = createAction("phonebook/removeContact");
const filterContacts = createAction("phonebook/filterContacts");

export { addContact, removeContact, filterContacts };

// *********** React - Redux *********** //

// import { v4 as uuid } from "uuid";

// const ADD_CONTACT = "phonebook/addContact";
// const REMOVE_CONTACT = "phonebook/removeContact";
// const FILTER_CONTACTS = "phonebook/filterContacts";
  

// const addContact = (contact) => ({
//   type: ADD_CONTACT,
//   payload: {
//     ...contact,
//     id: uuid(),
//   },
// });

// const removeContact = (payload) => ({
//   type: REMOVE_CONTACT,
//   payload: payload,
// });

// const filterContacts = (payload) => ({
//   type: FILTER_CONTACTS,
//   payload: payload.target.value,
// });

// export { addContact, removeContact, filterContacts };

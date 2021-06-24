// *********** Redux Toolkit *********** //

import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  FILTER_CONTACTS,
} from "./phoneBook.types";

const addContact = createAction(ADD_CONTACT, (contact) => {
  return {
    payload: {
      ...contact,
      id: uuid(),
    },
  };
});
const removeContact = createAction(REMOVE_CONTACT);
const filterContacts = createAction(FILTER_CONTACTS);

export { addContact, removeContact, filterContacts };

// *********** React - Redux *********** //

// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   FILTER_CONTACTS,
// } from "./phoneBook.types";
// import { v4 as uuid } from "uuid";

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

import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@email.com",
        phone: "111-222-5545",
        type: "personal"
      },
      {
        id: 2,
        name: "Harry Dill",
        email: "harry@email.com",
        phone: "111-333-5545",
        type: "professional"
      },
      {
        id: 3,
        name: "Tom Danger",
        email: "tom@email.com",
        phone: "212-222-5545",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

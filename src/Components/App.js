import React, { Component } from "react";
import Filter from "./filter/Filter";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="title">Phonebook:</h2>
        <ContactForm />

        <h2 className="title">Contacts:</h2>
        <Filter />

        <ContactList />
      </div>
    );
  }
}

export default App;

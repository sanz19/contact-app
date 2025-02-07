import React from "react";
import ContactCard from "./ContactCard";
import { Route, Link, useParams } from "react-router";

export default function ContactList(props) {
  const { contacts, handleDeleteContact } = props;

  return (
    <>
      <h3 class="ui horizontal divider header">My contacts</h3>
      <div className="ui middle aligned divided list">
        {contacts.map((contacts, contactsIndex) => {
          return (
            <ContactCard
              {...props}
              contacts={contacts}
              key={contactsIndex}
              index={contactsIndex}
            />
          );
        })}
      </div>
      <Link to="/contact-app/add">
        <button className="ui button fluid">Add contact</button>
      </Link>
    </>
  );
}

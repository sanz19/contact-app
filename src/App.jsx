import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactCard from "./components/ContactCard";
import AddContact from "./components/AddContact";
import CardDetails from "./components/CardDetails";
import ContactList from "./components/ContactList";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactsValue, setContactsValue] = useState({ name: "", email: "" });

  function persistData(newList) {
    localStorage.setItem("contacts", JSON.stringify({ contacts: newList }));
  }

  function handleAddContact(newContact) {
    const newContactList = [...contacts, newContact];
    persistData(newContactList);
    setContacts(newContactList);
  }

  useEffect(() => {
    if (!localStorage) return;
    let localContacts = localStorage.getItem("contacts");
    if (!localContacts) return;
    localContacts = JSON.parse(localContacts).contacts;
    setContacts(localContacts);
  }, []);

  function handleDeleteContact(index) {
    const newContactList = contacts.filter((contacts, contactIndex) => {
      return contactIndex !== index;
    });
    persistData(newContactList);
    setContacts(newContactList);
  }

  return (
    <>
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Routes>
            <Route path="contact-app/" element={<Main />} />
            <Route
              path="contact-app/add"
              element={
                <AddContact
                  contactsValue={contactsValue}
                  setContactsValue={setContactsValue}
                  handleAddContact={handleAddContact}
                />
              }
            />
            <Route
              path="contact-app/mycontacts"
              element={
                <ContactList
                  contacts={contacts}
                  handleDeleteContact={handleDeleteContact}
                />
              }
            />
            <Route
              path="contact-app/mycontacts/c/:id"
              element={<CardDetails contacts={contacts} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

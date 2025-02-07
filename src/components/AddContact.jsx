import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AddContact(props) {
  const { contactsValue, setContactsValue, handleAddContact } = props;
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setContactsValue({ ...contactsValue, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!contactsValue.name || !contactsValue.email) {
      setErrorMessage("Please fill in both fields.");
      return;
    }
    handleAddContact(contactsValue);
    setContactsValue({ name: "", email: "" });
    setErrorMessage("");
    navigate("/reactjs-contact-app/mycontacts");
  }

  return (
    <div className="ui container">
      <h3 class="ui horizontal divider header">Add contact</h3>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contactsValue.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactsValue.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="ui button" type="submit">
          Add
        </button>
      </form>
      {errorMessage && <div className="ui error message">{errorMessage}</div>}
    </div>
  );
}

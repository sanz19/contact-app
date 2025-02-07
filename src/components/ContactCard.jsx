import React from "react";
import CardDetails from "./CardDetails";
import { Route, Link, useParams } from "react-router";

export default function ContactCard(props) {
  const { name, email } = props.contacts;
  const { index, handleDeleteContact } = props;

  return (
    <>
      <div className="item">
        <div className="right floated content">
          <button
            className="ui icon button right floated"
            onClick={() => {
              handleDeleteContact(index);
            }}
          >
            <i
              className="trash alternate outline icon"
              style={{ color: "red" }}
            ></i>
          </button>
        </div>
        <Link to={`c/${index}`}>
          <img class="ui avatar image" src="/reactjs-contact-app/lindsay.png" />
          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

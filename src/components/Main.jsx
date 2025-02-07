import React from "react";
import { Route, Link, useParams } from "react-router";

export default function Main() {
  return (
    <>
      <div class="ui fluid menu">
        <Link to="/contact-app/mycontacts">
          <a class="item">MyContacts</a>
        </Link>
        <Link to="/contact-app/add">
          <a class="item">Add Contact</a>
        </Link>
      </div>
    </>
  );
}

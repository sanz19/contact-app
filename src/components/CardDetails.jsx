import React from "react";
import { useParams, Link } from "react-router";

export default function CardDetails(props) {
  const { contacts } = props;
  const { id } = useParams();
  const contact = contacts[id];

  if (!contact) {
    return <div className="ui error message">Contact not found</div>;
  }
  const { name, email } = contact;

  return (
    <>
      <div className="ui link cards centered">
        <div className="card">
          <div className="image">
            <img src="/contact-app/lindsay.png" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="meta">
              <a>Friends</a>
            </div>
            <div className="description">{email}</div>
          </div>
          <div className="extra content">
            <span className="right floated">Joined in {2000+ parseInt(id)}</span>
            <span>
              <i className="user icon"></i>
              75 Friends
            </span>
          </div>
          <Link to="/contact-app/">
            <button className="ui button fluid">Go to Menu</button>
          </Link>
        </div>
      </div>
    </>
  );
}

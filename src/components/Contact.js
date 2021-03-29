import React from "react";
import "../Contact.css";
const name = "Simon ECOFFET";
const avatar =
  "https://www.hicom.fr/wp-content/uploads/2017/09/Logo_TV_2015.png";
const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="avatar" />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

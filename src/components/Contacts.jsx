import React from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function Contacts() {
  return (
    <>
      <div className="contacts-container">
        <div className="contacts-form">
          <h1>Get in touch</h1>
          <div className="txtb">
            <label>FirstName:</label>
            <input type="text" placeholder="Please enter your name" />
          </div>
          <div className="txtb">
            <label>LastName:</label>
            <input type="text" placeholder="Please enter your last name" />
          </div>
          <div className="txtb">
            <label>Email:</label>
            <input type="email" placeholder="Please enter your email address" />
          </div>
          <div className="txtb txtb-msg">
            <label>Message:</label>
            <textarea></textarea>
          </div>
          <button className="btn">Send</button>
          <div className="personal-info">
            <h3>Email Address: mustaburrahman2017@hotmail.com</h3>
            <h3>Mobile Number: 07901003248</h3>
            <p></p>
          </div>
        </div>
      </div>
      <div className="contacts-footer">
        <Footer />
      </div>
    </>
  );
}

export default Contacts;

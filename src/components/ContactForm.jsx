import React from "react";

function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="firstname" />
      <br />
      <input type="text" placeholder="lastname" />
      <br />
      <input type="email" placeholder="email" />
      <br />
      <input
        className="msg-input"
        type="text-area"
        placeholder="Please type your message......"
      />
    </form>
  );
}

export default ContactForm;

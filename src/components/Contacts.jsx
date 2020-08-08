import React from "react";
import Footer from "./Footer";

class Contacts extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    msg: ""
  };

  handleInput = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = (e) => {
     e.preventDefault();
     console.log(this.state);
  }


  render() {
    return (
      <>
        <div className="contacts-container">
          <form className="contacts-form" action="https://formspree.io/mustaburrahman2017@hotmail.com" method="POST">
            <h1>Get in touch</h1>
            <div className="txtb">
              <label>FirstName:</label>
              <input
                type="text"
                name="firstName"
                placeholder="Please enter your first name"
              />
            </div>
            <div className="txtb">
              <label>LastName:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Please enter your last name"
              />
            </div>
            <div className="txtb">
              <label>Email:</label>
              <input
                type="email"
                name="_replyto"
                placeholder="Please enter your email address"
              />
            </div>
            <div className="txtb txtb-msg">
              <label>Message:</label>
              <input type="text" name="message"/>
            </div>
            <input className="btn" type="submit" value="Send" />
            <div className="personal-info">
              <h3>Email Address: mustaburrahman2017@hotmail.com</h3>
              <h3>Mobile Number: 07901003248</h3>
              <p></p>
            </div>
          </form>
        </div>
        <div className="contacts-footer">
          <Footer />
        </div>
      </>
    );
  }
}

export default Contacts;

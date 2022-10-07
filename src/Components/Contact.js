import "./Contact.css";

import Header from "./Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-parent">
        <h1>Connect With Us</h1>
        <div className="contact-about-project">
          <div className="about-project">
            <h2>Let's Talk</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
              lobortis mi vulputate potenti orci.lobortis mi vulputate potenti
              orci.
            </p>
            <form>
              <label>Your Name</label>
              <input className="name-input" />
              <div className="email-phone">
                <div className="email">
                  <label>Your Email</label>
                  <input />
                </div>
                <div className="phone">
                  <label>Your Phone Number</label>
                  <input />
                </div>
              </div>
              <label>Your Message</label>
              <textarea class="message-input" rows="10" cols="70"></textarea>
            </form>
          </div>
          <div className="contact-address-call-policy">
            <div className="address">
              <h2>Address</h2>
              <p>VIT Vellore, Vellore, TamilNadu</p>
            </div>
            <div className="call">
              <h2>Call us on</h2>
              <p>+91 68768 34444 info@billsplitter.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

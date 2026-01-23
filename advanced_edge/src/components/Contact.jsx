// ContactForm.jsx
import { useState } from 'react';
import '../css/App.css';
import '../css/index.css';

export function ContactInformation() {
    return(
        <div className="contact-info">
            <div className="contact-info-phone">
                <h3>Phone number:</h3>
                <p>+44 7777 777 777</p>
            </div>
            <div className="contact-info-instagram">
                <h3>Instagram:</h3>
                <p>Instagram Link</p>
            </div>
            <div className="contact-info-facebook">
                <h3>Facebook:</h3>
                <p>Facebook Link</p>
            </div>
            <div className="contact-info-working-hours">
                <h3>Working hours:</h3>
                <p>Monday - Friday: 8:00 - 17:00</p>
            </div>
        </div>
    )
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to be contacted.");
      return;
    }
    console.log({ name, email, telephoneNumber, message, agreed });
    alert("Form submitted!");
  };

  return (
    <div id="contact-form">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          value={telephoneNumber}
          onChange={(e) => setTelephoneNumber(e.target.value)}
          placeholder="Telephone number"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          rows={5}
          required
        />
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          By ticking, I agree to share my form responses and allow Advanced Edge to contact me.
        </label>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;

import { useState } from 'react';
import '../css/App.css';
import '../css/index.css';

function ContactForm() {
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
    // handle sending the form
    console.log({ name, email, telephoneNumber, message, agreed });
    alert("Form submitted!"); // temporary feedback
  };

  return (
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
  );
}

export default ContactForm;

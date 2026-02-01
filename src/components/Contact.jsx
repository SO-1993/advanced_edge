import { useState } from "react";
import { FiPhone, FiMail, FiInstagram, FiFacebook, FiClock } from "react-icons/fi";

export function ContactInformation() {
  return (
    <div className="contact-info">
      <div className="contact-row">
        <FiPhone className="contact-icon" aria-hidden="true" />
        <div>
          <h3>Phone</h3>
          <p><a href="tel:+447881202979">07881 202979</a></p>
        </div>
      </div>

      <div className="contact-row">
        <FiMail className="contact-icon" aria-hidden="true" />
        <div>
          <h3>Email</h3>
          <p><a href="mailto:liam@advancededge.co.uk">liam@advancededge.co.uk</a></p>
        </div>
      </div>

      <div className="contact-row">
        <FiInstagram className="contact-icon" aria-hidden="true" />
        <div>
          <h3>Instagram</h3>
          <p>
            <a href="https://www.instagram.com/advancededge_ltd/" target="_blank" rel="noopener noreferrer">
              Follow us on Instagram
            </a>
          </p>
        </div>
      </div>

      <div className="contact-row">
        <FiFacebook className="contact-icon" aria-hidden="true" />
        <div>
          <h3>Facebook</h3>
          <p>
            <a
              href="https://www.facebook.com/people/Advanced-Edge-Ltd/61586378314756/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advanced Edge Ltd on Facebook
            </a>
          </p>
        </div>
      </div>

      <div className="contact-row">
        <FiClock className="contact-icon" aria-hidden="true" />
        <div>
          <h3>Working Hours</h3>
          <p>Mon – Fri: 8:00am – 5:00pm</p>
        </div>
      </div>
    </div>
  );
}


export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      setAgreeError("Please agree to be contacted.");
      return;
    }

    setAgreeError("");
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mbdooejn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, telephoneNumber, message }),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setName("");
      setEmail("");
      setTelephoneNumber("");
      setMessage("");
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact-form">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          autoComplete="name"
          required
        />

        <label className="sr-only" htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="email"
          required
        />

        <label className="sr-only" htmlFor="contact-tel">Telephone number</label>
        <input
          id="contact-tel"
          type="tel"
          value={telephoneNumber}
          onChange={(e) => setTelephoneNumber(e.target.value)}
          placeholder="Telephone number"
          autoComplete="tel"
        />

        <label className="sr-only" htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
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
            onChange={(e) => {
              setAgreed(e.target.checked);
              if (e.target.checked) setAgreeError("");
            }}
          />
          By ticking, I agree to share my form responses and allow Advanced Edge to contact me.
        </label>

        {agreeError && (
          <p className="error-text" role="alert">
            {agreeError}
          </p>
        )}

        <button type="submit" className="submit-btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        <div aria-live="polite">
          {status === "success" && (
            <p className="success-text">
              Thanks for reaching out! We&apos;ll get back to you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="error-text">
              Something went wrong. Please try again later.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

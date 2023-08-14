import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isNameRequired, setIsNameRequired] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleNameBlur = () => {
    if (!name) {
      setIsNameRequired(true);
    } else {
      setIsNameRequired(false);
    }
  };


  const handleEmailBlur = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setIsNameRequired(true);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setIsEmailInvalid(true);
      return;
    }
    // Handle form submission here
  };

  return (
    <section id = "contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onBlur = {handleNameBlur}
            
            onChange={(e) => setName(e.target.value)}
          />
          {isNameRequired && <span className="error">Name is required</span>}
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur = {handleEmailBlur}
          />
          {isEmailInvalid && <span className="error">Invalid email address</span>}
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
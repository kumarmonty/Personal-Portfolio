import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_oqolixp', // Replace with your EmailJS service ID
      'template_4nhel8i', // Replace with your EmailJS template ID
      formData,
      'M9C_dA-fV2cATfA5A' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
    }).catch((error) => {
      console.log('FAILED...', error);
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.sectionTitle}>Contact</h1>
        {submitted ? (
          <p>Thank you for your message! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="user_name" hidden>Name</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Name"
                required
                value={formData.user_name}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="user_email" hidden>Email</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Email"
                required
                value={formData.user_email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" hidden>Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
              ></textarea>
            </div>
            <input className={styles.submit} type="submit" value="Submit" />
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

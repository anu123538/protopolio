import React, { useRef } from 'react';
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f8dan5f",    // ✅ Your service ID
      "template_odt9vcn",   // ✅ Your template ID
      form.current,
      "tm3EHKEwriFBJ3chU"   // ✅ Your public key
    )
    .then(
      (result) => {
        toast.success("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        toast.error("Failed to send message. Try again!");
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            I'd love to hear from you! Whether it’s a project idea, job opportunity, or just a hello — drop a message!
          </p>
          <ul>
            <li><FaEnvelope /> anuththaraimanshi842@gmail.com</li>
            <li><FaPhone /> ‪+94 768483156‬</li>
            <li><FaMapMarkerAlt /> Alawwa, Sri Lanka</li>
          </ul>
          <div className="social-media">
            <h3>Follow Me</h3>
            <a href="https://github.com/anu123538"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/anuththara-amarasingha-43b03a311/"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default Contact;

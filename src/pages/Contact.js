import React, { useState } from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin, FaReddit, FaGithub } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "sending", "success", "error"
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  // Automatically use Render backend in production
  const backendUrl ="https://personal-portfolio-backend-1vh9.onrender.com"
   

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setStatus("sending");

    try {
      const response = await fetch(`${backendUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mail, message }),
      });

      if (response.ok) {
        setSuccess("Message sent successfully ✅");
        setStatus("success");
        setName("");
        setMail("");
        setMessage("");

        setTimeout(() => {
          setSuccess("");
          setStatus("");
        }, 3000);
      } else {
        setError("Failed to send message ❌");
        setStatus("error");

        setTimeout(() => {
          setError("");
          setStatus("");
        }, 3000);
      }
    } catch (err) {
      setError("Network error: " + err.message);
      setStatus("error");

      setTimeout(() => {
        setError("");
        setStatus("");
      }, 3000);
    }
  };

  const getButtonText = () => {
    if (status === "sending") return "Sending...";
    if (status === "success") return "Message Sent!";
    if (status === "error") return "Failed!";
    return "Send Message";
  };

  return (
    <div className="ContactWrapper">
      <div className="Section1">
        <ul>
          <li>
            <FaPhone className="icon icon-phone" />
            <a href="tel:+919385462893">+91-9385462893</a>
          </li>
          <li>
            <FaEnvelope className="icon icon-mail" />
            <a href="mailto:sreethar170@gmail.com">sreethar170@gmail.com</a>
          </li>
          <li>
            <FaWhatsapp className="icon icon-whatsapp" />
            <a
              href="https://wa.me/+919385462893?text=Hello Sreethar! 👋"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <FaLinkedin className="icon icon-linkedin" />
            <a
              href="https://www.linkedin.com/in/sreethar170"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FaReddit className="icon icon-reddit" />
            <a
              href="https://www.reddit.com/u/sreethar170/s/inrM2DI2Wo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reddit
            </a>
          </li>
          <li>
            <FaGithub className="icon icon-github" />
            <a
              href="https://github.com/Sreethar170"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className="Section2">
        <form className="contact" onSubmit={handleSendMessage}>
          <div className="input-container">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" "
              required
            />
            <label>Type your full name to begin the conversation...</label>
          </div>

          <div className="input-container">
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder=" "
              required
            />
            <label>Where can I reach you? (your@email.com)</label>
          </div>

          <div className="input-container">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder=" "
              required
            ></textarea>
            <label>
              Share your thoughts, ideas, or project details — let’s start a
              conversation!
            </label>
          </div>

          <button
            type="submit"
            className={`Submit ${status}`}
            disabled={status === "sending"}
          >
            {getButtonText()}
          </button>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;

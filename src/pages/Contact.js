import React from "react";
import { use, useState } from "react";
import './Contact.css'
import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin, FaReddit, FaGithub } from "react-icons/fa";

function Contact() {
  const [name, setname]=useState("");
const [mail, setmail]=useState("");
const [message, setmessage]=useState("");
const [Contact, setContact]=useState([]);
const [error, seterror]=useState("");
const [success, setsuccess]=useState("");
const [status, setStatus] = useState("");

const aptUrl="http://localhost:8000";
const handleSendMessage=(e)=>{
  e.preventDefault(); 
    seterror("");
    setsuccess("");
    setStatus("")
    if(name.trim() !=='' && mail.trim()!=='' && message.trim()!==''){
      setStatus("sending");
        fetch(aptUrl+"/contact",{
            method: "POST",
            headers:{
                
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, mail, message})
        }).then((res)=>{
            if(res.ok){
                setContact([...Contact, {name, mail, message}]);
                setsuccess("Message send successfully");
                setStatus("Message send successfully");
                setTimeout(() => {
                setsuccess("");
                }, 3000);
                setname("");
                setmail("");
                setmessage("");
            }else{
                seterror("Failed to send a Message");
                setStatus("error");
                setTimeout(()=>{
                    seterror("");
                },3000);
            }
        }).catch((err)=>{
            seterror("Error: " + err.message);
            setStatus("error");
            setTimeout(()=>{
                seterror(""); 
                
            }, 3000);
           
        });

         
    }
    }
     const getButtonText = () => {
    if (status === "sending") return "Sending...";
    if (status === "success") return "Message Sent!";
    if (status === "error") return "Failed!";
    return "Send Message";
  };
  const username = name || "there"; 
  return (
    <div className="ContactWrapper">
      <div className="Section1">
       <ul>
  <li><FaPhone className="icon icon-phone" /><a href="tel:+919385462893">+91-9385462893</a> </li>
  <li><FaEnvelope className="icon icon-mail" /> <a href="mailto:sreethar170@gmail.com">sreethar170@gmail.com</a></li>
  <li><FaWhatsapp className="icon icon-whatsapp" /> 
      <a href="https://wa.me/+919385462893?text=Hello Sreethar! 👋" target="_blank" rel="noopener noreferrer">WhatsApp</a>
  </li>
  <li><FaLinkedin className="icon icon-linkedin" /> 
      <a href="www.linkedin.com/in/sreethar170" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </li>
  <li><FaReddit className="icon icon-reddit" /> 
      <a href="https://www.reddit.com/u/sreethar170/s/inrM2DI2Wo" target="_blank" rel="noopener noreferrer">Reddit</a>
  </li>
  <li><FaGithub className="icon icon-github" /> 
      <a href="https://github.com/Sreethar170" target="_blank" rel="noopener noreferrer">GitHub</a>
  </li>
</ul>
      </div>

      <div className="Section2">
        <form className="contact" onSubmit={handleSendMessage}>
          <div className="input-container">
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder=" " required />
            <label htmlFor="name">Type your full name to begin the conversation...</label>
          </div>

          <div className="input-container">
            <input type="email" value={mail} onChange={(e) => setmail(e.target.value)} placeholder=" " required />
            <label htmlFor="email">Where can I reach you? (your@email.com)</label>
          </div>

          <div className="input-container">
            <textarea value={message} onChange={(e) => setmessage(e.target.value)} placeholder=" " required></textarea>
            <label htmlFor="message">Share your thoughts, ideas, or project details — let’s start a conversation!</label>
          </div>

          <button type="submit" className={`Submit ${status}`} disabled={status === "sending"}>
            {getButtonText()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;



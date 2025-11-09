import './Footer.css';
import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin, FaReddit, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className="Footer">
            <p>
                © 2025 SREETHAR N J. All rights reserved.<br />
                Designed by Sreethar
            </p>

            <div className="FooterContacts">
                {/* Row 1: phone & email */}
                <div className="FooterRow">
                    <a href="tel:+919385462893" className="contact-item">
                        <FaPhone className="icon icon-phone" /> +91-9385462893
                    </a>
                    <a href="mailto:sreethar170@gmail.com" className="contact-item">
                        <FaEnvelope className="icon icon-mail" /> sreethar170@gmail.com
                    </a>
                </div>

                {/* Row 2: social icons only */}
                <div className="FooterRow">
                    <FaWhatsapp className="icon icon-whatsapp" 
                        onClick={() => window.open("https://wa.me/+919385462893?text=Hello Sreethar! ", "_blank")} />
                    <FaLinkedin className="icon icon-linkedin" 
                        onClick={() => window.open("www.linkedin.com/in/sreethar170", "_blank")} />
                    <FaReddit className="icon icon-reddit" 
                        onClick={() => window.open("https://www.reddit.com/u/sreethar170/s/inrM2DI2Wo", "_blank")} />
                    <FaGithub className="icon icon-github" 
                        onClick={() => window.open("https://github.com/Sreethar170", "_blank")} />
                </div>
            </div>
        </div>
    );
}

export default Footer;

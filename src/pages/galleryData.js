import Kong_2 from '../Assets/Photos/Kong_2.jpeg';
import Kong_2_Certificate from '../Assets/Certificates/Kongu_2_Certificate.jpeg';
import Muthayammal from '../Assets/Photos/Muthayammal.jpeg';
import MuthayammalCertificate from '../Assets/Certificates/Muthayammal.jpeg';
import Muthayammal_1 from '../Assets/Photos/Muthayammal_1.jpeg';
import RBI from '../Assets/Certificates/RBI.jpeg';
import VIT from '../Assets/Photos/VIT.jpeg';
import VITCertificate from '../Assets/Certificates/VIT.jpeg';
import IIT from '../Assets/Certificates/IIT.jpeg';
import Sona from '../Assets/Photos/Sona.jpeg';
import SonaCertificate from '../Assets/Certificates/Sona.jpeg';
import CIT from '../Assets/Photos/CIT_PC.jpeg';
import CITCirtificate from '../Assets/Certificates/CIT.jpeg';
import Muthayammal_2 from '../Assets/Photos/Muthayammal_2.jpeg';
import Bannari_2 from '../Assets/Photos/Bannari_2.jpeg';
import BannariCirtificate_2 from '../Assets/Certificates/Bannari_2.jpeg';
import ISRO from '../Assets/Certificates/ISRO.jpeg';
import Infosys from '../Assets/Certificates/Infosys.jpeg';
import Kongu from '../Assets/Photos/Kongu.jpg';
import KonguCertificate from '../Assets/Certificates/Kongu.jpeg';
import Kongu_1 from '../Assets/Certificates/Kongu_1.jpeg';
import ISRO_2 from '../Assets/Certificates/ISRO_2.jpeg';
import NoviTech from '../Assets/Certificates/NoviTech.jpeg';
import BSNL from '../Assets/Certificates/BSNL.jpg';
import SixSigma from '../Assets/Certificates/SixSigma.jpeg';
import Bannari_1 from '../Assets/Certificates/Bannari_1.jpeg';
import MobileService from '../Assets/Certificates/MobileService.jpeg';
import Gnanamani from '../Assets/Certificates/Gnanamani.jpeg';
import Sunshiv from '../Assets/Certificates/Sunshiv.jpeg';
import SakthiPolytechnicCollege_2 from '../Assets/Certificates/SakthiPolytechnicCollege_2.jpg';
import PomodoroTimer from '../Assets/Projects/PomodoroTimer.png'
import Todos from '../Assets/Projects/Todos.jpg'
import Portfolio from '../Assets/Projects/portfolio.png'
import Portfolio_1 from '../Assets/Projects/Portfolio_1.png'
import Accident from '../Assets/Projects/Accident.jpg'
import HomeAutomation from '../Assets/Projects/HomeAutomation.jpg'
import Rover from '../Assets/Projects/Rover.jpg'
import IT from '../Assets/Certificates/IT.jpeg';
import Cisco_IoT from '../Assets/Certificates/Cisco(IoT).jpeg';
import Cisco_NS from '../Assets/Certificates/Cisco_NS.jpeg';
import Cisco_Addressing from '../Assets/Certificates/Cisco_Addressing.jpeg';
import Cisco_Hardware from '../Assets/Certificates/Cisco_Hardware.jpeg';
import Cisco_Networking from '../Assets/Certificates/Cisco_Networking.jpeg';
import Windows_Networking from '../Assets/Certificates/Windows_Networking.jpeg';
import Workshop_SKCET from '../Assets/Photos/Workshop_SKCET.jpg';
import Dhanalakshmi from '../Assets/Certificates/Dhanalakshmi.jpeg';


  const data = [
    { id: 1,link: "https://www.linkedin.com/posts/sreethar170_innovation-embeddedsystems-iot-activity-7343196721679671296-Gztn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD6UVVMB-KRVKy52mXXvX5c-0Jk5XSjfl6U" , title: "Project Title: Zone-Level Real-Time Accident Detection System", image: Accident, category:"Projects" },
    { id: 2,link: "" ,title: "Personal Portfolio Webpage (MERN - STACK)", image: Portfolio_1, category:"Projects" },
    { id: 3, title: "2nd Prize – “Creation Unleashed” Project Presentation, Kongu Engineering College (2025)", image: Kong_2, category: "Photos" },
    { id: 4, title: "Certificate of Achievement for securing 2nd Prize in the “Creation Unleashed” Project Presentation event held at Kongu Engineering College in 2025.", image: Kong_2_Certificate, category: "Certificate" },
    { id: 5, title: "3rd Prize – Project Expo, Muthayammal Engineering College", image: Muthayammal, category: "Photos" },
    { id: 6, title: "Certificate of Achievement for securing 3rd Prize in the Project Expo conducted at Muthayammal Engineering Colle", image: MuthayammalCertificate, category: "Certificate" },
    { id: 7, title: "As the IoT Club Coordinator at Sri Krishna College of Engineering and Technology, responsible for coordinating and delivering hands-on workshops on Embedded Systems and IoT, having successfully conducted 10+ workshops.", image: Workshop_SKCET, category: "Photos" },
    { id: 7, title: "Two-Day Workshop on Embedded Systems and IoT – Conducted at Vanetra Muthayammal Institutions", image: Muthayammal_1, category: "Photos" },
    { id: 8, title: "Completed internship at the Ministry of Railways under the Signal and Telecommunication Workshop.", image: RBI, category: "Internship" },
    { id: 9, title: "Project Expo (VIT) – 2nd Place Winner", image: VIT, category: "Photos" },
    { id: 10, title: "Certificate of Achievement for securing 2nd Place in the Project Expo conducted at VIT.", image: VITCertificate, category: "Certificate" },
    { id: 11, title: "Completed Linux Training offered by the Spoken Tutorial Project, IIT Bombay", image: IIT, category: "Courses" },
    { id: 12, title: "2nd Place – Project Spotlight, Sone College of Technology", image: Sona, category: "Photos" },
    { id: 13, title: "Certificate of Achievement for securing 2nd Place in the Project Spotlight event conducted at Sone College of Technology.", image: SonaCertificate, category: "Certificate" },
    { id: 14, title: "Runner-Up – PC Building Event, CRYPTERA 2025 (CIT)", image: CIT, category: "Photos" },
    { id: 15, title: "Certificate of Runner-Up – PC Building Event, CRYPTERA 2025 (CIT)", image: CITCirtificate, category: "Certificate" },
    { id: 16, title: "Workshop on Embedded Systems and IoT – Conducted at Vanetra Muthayammal Institutions", image: Muthayammal_2, category: "Photos" },
    { id: 17, title: "Winners – Product Expo, BIT V-Prayukti’25", image: Bannari_2, category: "Photos" },
    { id: 18, title: "Winners Certificate – Product Expo, BIT V-Prayukti’25", image: BannariCirtificate_2, category: "Certificate" },
    { id: 19, title: "Certificate of Participation from IIRS-ISRO", image: ISRO, category: "Certificate" },
    { id: 20, title: " 1st Prize – Tech Venture, Kongu Engineering College", image: Kongu, category: "Photos" },
    { id: 21, title: "Secured 1st Prize in the Tech Venture event at Kongu Engineering College - (2024).", image: Kongu_1, category: "Certificate" },
    { id: 22, title: "Secured 1st Prize in the Explore-X event at Kongu Engineering College - (2024).", image: KonguCertificate, category: "Certificate" },
    { id: 23, title: "Successfully completed the “Understanding Cryospheric Hazards” online workshop organized by the Indian Institute of Remote Sensing (IIRS).", image: ISRO_2, category: "Certificate" },
    { id: 24, title: " Internship at Novitech R&D Pvt Ltd!", image: NoviTech, category: "Internship" },
    { id: 25, title: "In-Plant Training at BSNL (Bharat Sanchar Nigam Limited)", image: BSNL, category: "Internship" },
    { id: 26, title: "Certified Lean Six Sigma AI Yellow Belt Achievement!", image: SixSigma, category: "Certificate" },
    { id: 27, title: "Secured the 3rd place at BIT V-PRAYUKTI’23 at Bannari Amman Institute of Technology", image: Bannari_1, category: "Certificate" },
    { id: 28, title: "Smart Phone Servicing and Troubleshooting", image: MobileService, category: "Certificate" },
    { id: 29, title: "I won the 1st prize in PROJECT PRESENTATION at Gnanamani College of Technology(ECE) - (2022).", image: Gnanamani, category: "Certificate" },
    { id: 30, title: " I have successfully completed a hands-on training at SUNSHIV Electronic Solutions(Internship) - (2022)", image: Sunshiv, category: "Internship" },
    { id: 31, title: "I won the 3rd prize in PROJECT PRESENTATION at Sakthi Polytechnic College - (2023)", image: SakthiPolytechnicCollege_2, category: "Certificate" },
     { id: 31, title: "I won the 2rd prize in PROJECT PRESENTATION at Dhanalakshmi Srinivasan Polytechnic College - (2022)", image: Dhanalakshmi, category: "Certificate" },
    { id: 32, link: "https://sreethar170.github.io/Portfolio/Portfolio.html" , title: "Personal Portfolio Webpage", image: Portfolio, category:"Projects" },
    { id: 33, link: "https://github.com/Sreethar170/HomeAutomationProject" , title: "Home Automation (IoT) - 2021", image: HomeAutomation, category: "Projects" },
    { id: 34, title: "Rover", image: Rover, category: "Projects" },
    { id: 35, link:"https://github.com/Sreethar170/Todos" , title: "Full-Stack Todos Application", image: Todos, category: "Projects" },
    { id: 36, title: "Pomodoro Timer (ReactJS)", image: PomodoroTimer, category: "Projects" },
    { id: 37, title: "IT & Technical Support Guide to Helpdesk, Desktop & Servers", image: IT, category: "Courses" },
    { id: 38, title: "Internet of Things (IoT) course from Cisco Networking Academy", image: Cisco_IoT, category: "Courses" },
    { id: 39, title: "Network Support and Security certification from Cisco Networking Academy", image: Cisco_NS, category: "Courses" },
    { id: 40, title: "Network Addressing and Basic Troubleshooting course from Cisco Networking Academy", image: Cisco_Addressing, category: "Courses" },
    { id: 41, title: "Computer Hardware Basics certification from Cisco Networking Academy", image: Cisco_Hardware, category: "Courses" },
    { id: 42, title: "Cisco Networking Academy's Networking Basics certification", image: Cisco_Networking, category: "Courses" },
    { id: 43, title: "Java for Beginners course through Infosys Springboard!", image: Infosys, category: "Courses" },
    { id: 44, title: "Windows Networking course on Udemy", image: Windows_Networking, category: "Courses" },



  ];

  export default data;
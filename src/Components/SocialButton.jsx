import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import CV from "../public/CV_SerbanIulian.pdf"

export default function SocialButton ({type}) {

    switch (type) {
        case 'FaLinkedin':
            return (
                <a href="https://linkedin.com/in/iulian-serban-12ab3522b" target='_blank' rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            )
            break;
        case 'FaGithub':
            return (
                <a href="https://github.com/Rokonze" target='_blank' rel="noopener noreferrer"> 
                    <FaGithub />
                </a>
            )
            break;
        case 'TbFileCv':
            return (
                <a href={CV} target='_blank' rel="noopener noreferrer">
                    <TbFileCv />
                </a>
            )
            break;
    }

    
}
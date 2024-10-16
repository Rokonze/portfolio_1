import { useState } from "react";

export default function Button ({text}) {
    const [isActive , setIsActive] = useState({about: false, projects: false});

    const distance = window.innerWidth > 1050 ? 600 : 1100

    const handleScroll = () => {
        if(window.scrollY < distance) {
            setIsActive({ about: true,
                          projects: false
            });
        } else if (window.scrollY > distance) {
            setIsActive({about:false,
                         projects: true
            });
        }
    }

    

  

  window.addEventListener('scroll', handleScroll);
    
    const buttonStyle1 = isActive.about ? "p-2 mx-2 text-lg text-[#293241] border-[#293241] border-x-0 border-t-0 border-b-4" : "p-2 mx-2 text-lg text-[#293241] border-[#293241] border-x-0 border-t-0 border-b-0";
    const buttonStyle2 = isActive.projects ? "p-2 mx-2 text-lg text-[#293241] border-[#293241] border-x-0 border-t-0 border-b-4" : "p-2 mx-2 text-lg text-[#293241] border-[#293241] border-x-0 border-t-0 border-b-0";

    switch (text) {
        case 'about' :
            return (
                <a href="#about" className={buttonStyle1} >{text}</a>
            )
            break;
        case 'projects' :
            return (
                <a href="#projects" className={buttonStyle2}>{text}</a>
            )
    }

    
}
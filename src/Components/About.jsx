import Image from "./Image"
import SocialButton from "./SocialButton"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function About () {


    return (
        <main className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0 justify-center   text-[#293241] scroll-mt-32" id="about" >
            <div className=" py-16 flex flex-col items-center bg-[#d6cfcb] w-full  lg:w-2/5 lg:h-[35rem]  h-full space-y-4 rounded-3xl shadow-xl h-auto">
                
                <Image />
                <h2 className="font-bold text-xl">Iulian Serban</h2>
                <p>Front-End Developer</p>
                <div className="flex flex-row text-5xl space-x-8">
                    <SocialButton type={"FaLinkedin"}/>
                    <SocialButton type={"FaGithub"}/>
                    <SocialButton type={"TbFileCv"}/>
                </div>
                
            </div>
            <div className="bg-[#d6cfcb] w-full  lg:w-3/5 px-8 py-16 xl:space-y-6 space-y-2 lg:h-[35rem] rounded-3xl shadow-xl"  >
                <h2 className="text-4xl">ABOUT ME</h2>
                <p className="text-balance">HEY! I'm a Front-end web developer with a passion for learning and constantly looking for new challenges and opportunities.<br></br> The satisfaction of creating websites is what drives me to keep learning and improving my skills.</p>
                <h2 className="text-2xl">STUDIES</h2>
                <p className="text-balance">Student at Transylvania University of Brasov, pursuing a Bachelor's dregree at distance from Bucharest. My studies do not interfere with my professional activity since they take place exclusively on weekend days.</p>
                <h2 className="text-2xl">SKILLS</h2>
                <div className="flex flex-row text-6xl space-x-4">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                    <RiTailwindCssFill />
                </div>
            </div>
        </main>
    )
}
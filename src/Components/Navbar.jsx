import Button from "./Button"

export default function Navbar () {


    return (
        <nav className="fixed top-0 left-0 right-0 w-screen py-6 mb-16 flex justify-center shadow-md  bg-[#f2e9e4]">
            <Button text={"about"} ></Button>
            <Button text={"projects"} ></Button>
            
        </nav>
    )
}
import Project from "./Project"

export default function Projects () {
    

    return (
        <section className="flex flex-col items-center w-full py-16 my-16 bg-[#d6cfcb] rounded-3xl space-y-12 text-[#293241] shadow-xl scroll-mt-16" id="projects">
            <h1 className="font-bold text-4xl">My projects</h1>
            <div className="flex w-full flex-col xl:flex-row items-center justify-center xl:space-x-48 space-y-24 xl:space-y-0 px-8">
                <Project type={"dgball"}/>
                <Project type={"userfinder"}/>
            </div>
            
        </section>
    )
}
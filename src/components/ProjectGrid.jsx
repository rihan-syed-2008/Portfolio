import ProjectCard from "./ProjectCard"

function ProjectGrid(){
  return(
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <ProjectCard name="We" description="Collab Study App"/>
        <ProjectCard name="TRIDENT" description="Oil Spill Vessel Finder"/>
        <ProjectCard name="DebugDuel" description="AI Code Debugger Game" />
      </div>
    </section>
  )
}
export default ProjectGrid
function ProjectCard({name, description, className}){
  return(
    <div className={`bg-[#D4FF3D] text-[#14180A] p-4 rounded-lg ${className}`}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
export default ProjectCard
import Tag from "./Tag"
function Skills(){
  return(
    <section>
      <h2>Skills</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        <Tag>React</Tag>
        <Tag>Java</Tag>
        <Tag>JavaScript</Tag>
        <Tag>GSAP</Tag>
        <Tag>Tailwind</Tag>
        <Tag>Git</Tag>
      </div>
    </section>
  )
}
export default Skills
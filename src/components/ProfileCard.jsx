import Tag from "./Tag";
import { useState, useRef, useEffect } from "react";
function ProfileCard({ name, role, tags }) {
  const [showDetails, setShowDetails] = useState(false);
  const [sayHello, setSayHello] = useState(false);
  const headingRef = useRef(null);
  function handleShow() {
    setShowDetails(!showDetails)
  }

  function handleHello(){
    setSayHello(!sayHello)
  }

  function handleRef(){
    console.log(headingRef.current)
  }

  useEffect(()=>{
    console.log(showDetails?"Details are visible":"Details are hidden")
  },[showDetails])

  useEffect(() => {
  console.log(headingRef.current);
  document.title = name;
});

  useEffect(() => {
    function handleResize(){
    console.log(window.innerWidth)
  }
    window.addEventListener("resize", handleResize)
    return() => {
      window.removeEventListener("resize", handleResize)
    };
  },[])

  useEffect(()=>{
    headingRef.current.style.color = "red"
  },[])

  return (
    <section className="bg-white rounded-md p-3 text-black">
      <h1>{name}</h1>
      <h3>{role}</h3>
      {tags.map(tag=>(
        <Tag key={tag}>{tag}</Tag>
      ))}

      {showDetails?<p>
        I enjoy building things that challenge me, learning through hands-on
        experience, and turning ideas into something real. I'm always looking
        for the next problem worth solving.
      </p>:null}
      <button onClick={handleShow} className="block">{showDetails ? "Hide Details" : "Show Details"}</button>

      <button onClick={handleHello}>{sayHello?"Hello!":"Say Hello"}</button>

      <h1 ref={headingRef}>Rihan Syed</h1>
      <button onClick={handleRef}>Log Heading</button>
    </section>
  );
}
export default ProfileCard;

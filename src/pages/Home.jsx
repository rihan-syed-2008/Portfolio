import { useState } from "react";
import Tag from "../components/Tag";
import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";
function Home() {
  const [copied, setCopied] = useState(false);
  const [readMore, setReadMore] = useState(false);

  function handleRead() {
    setReadMore(!readMore);
  }
  function handleCopy() {
    navigator.clipboard.writeText("rihan.syed2025@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <section className="bg-[#0A0A0A] text-white p-8">
      <h1>Rihan Syed</h1>
      <p>I am a second year CSE Student</p>
      <Button href="#projects">View work</Button>
      <Button href="#contact">Get in touch</Button>
      <button
        className="bg-white text-[#0A0A0A] rounded p-2 m-1"
        onClick={handleCopy}
      >
        {copied ? "Copied" : "Copy Email"}
      </button>
      <Tag>Athlete</Tag>
      <Tag>CSE Student</Tag>
      <p>
        I’m a curious and driven student who enjoys building things, solving
        problems, and taking on challenges that push me to grow. I’m especially
        interested in technology, leadership, and turning ideas into something
        meaningful.
      </p>
      {readMore ? (
        <p>
          Alongside academics and technical projects, I’ve taken on
          opportunities that involve teamwork, communication, mentoring, and
          organizing. These experiences have taught me that building something
          successful isn’t just about having the right technical skills; it’s
          also about being able to work with people, take responsibility, adapt
          when things don’t go as planned, and keep moving forward. I’m
          constantly looking for opportunities to learn something new, challenge
          myself, and become better at what I do. Whether I’m working on a
          technical problem, contributing to a team, or taking the lead on
          something, I try to approach it with curiosity, ownership, and the
          mindset that there is always room to improve.
        </p>
      ) : null}
      <button onClick = {handleRead} className = "bg-[#FFFFFF33] p-1 rounded-md block">{readMore ? "Read Less.." : "Read More.."}</button>

      <ProfileCard name="Rihan Syed" role="Student" tags={["Athlete","CSE Student"]} />
    </section>
  );
}
export default Home;

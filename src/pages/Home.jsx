import Hero from "../components/Hero";
import ProjectGrid from "../components/ProjectGrid";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Home() {

  return (
    <section className="bg-[#0A0A0A] text-white p-8">
      <Hero name="Rihan Syed" role="CSE Student" description="I’m a curious and driven student who enjoys building things, solving
        problems, and taking on challenges that push me to grow. I’m especially
        interested in technology, leadership, and turning ideas into something
        meaningful."/>

      <h2>Featured Projects</h2>
      <ProjectGrid />

      <Skills />

      <Contact />

    </section>
  );
}
export default Home;

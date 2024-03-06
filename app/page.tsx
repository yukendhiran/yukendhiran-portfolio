  
import SideBar from "../components/comp/SideBar/SideBar";
import Hero from "../components/comp/Hero/Hero";
import About from "../components/comp/About/About";
import Exp from "../components/comp/Exp/Exp";
import Projects from "../components/comp/Projects/Projects";
import Contact from "../components/comp/Contact/Contact";
import Cert from '../components/comp/About/Cert'
import Acad from '../components/comp/About/Acad'
import Skills from '../components/comp/About/Skills'

export default function Home() {
   

  return (
    <section className="bg-secondary text-primary">
      <SideBar />
      <Hero />
      <About/>
      <Acad/>
      <Cert/>
      <Skills/>
      <Exp/>
      <Projects/>
      <Contact/>
    </section>
  );
}
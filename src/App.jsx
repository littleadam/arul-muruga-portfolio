import Contact, { Footer } from "./components/Contact";
import AtsCheck from "./components/AtsCheck";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Programme from "./components/Programme";
import Project from "./components/Project";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Metrics />
        <Profile />
        <Programme />
        <Experience />
        <Expertise />
        <Project />
        <AtsCheck />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

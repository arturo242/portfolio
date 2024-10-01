import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Header, About, Contact, Experience, Projects, Skills, Model3D } from './components'

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRefs = {
    app: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    // contact: useRef(null),
  };

  useEffect(() => {

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const bottomPosition = documentHeight - (scrollTop + windowHeight);
      if(scrollTop === 0) setActiveSection(null)


      const { about, experience, projects, skills, contact } = sectionsRefs;

      const aboutPos = about.current ? Math.round(about.current.getBoundingClientRect().y) : 0;
      const experiencePos = experience.current ? Math.round(experience.current.getBoundingClientRect().y) : 0;
      const projectsPos = projects.current ? Math.round(projects.current.getBoundingClientRect().y) : 0;
      const skillsPos = skills.current ? Math.round(skills.current.getBoundingClientRect().y) : 0;
      // const contactPos = contact.current ? Math.round(contact.current.getBoundingClientRect().y) : 0;
      
      if (aboutPos < 30) {
        setActiveSection('about');
      }
      if (experiencePos < 30) {
        setActiveSection('experience');
      }
      if (projectsPos < 30) {
        setActiveSection('projects');
      }
      if (skillsPos < 30 || bottomPosition === 0) {
        setActiveSection('skills');
      }
      // if (contactPos < 30 || bottomPosition === 0) {
      //   setActiveSection('contact');
      // }
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className='model-container'>
        <Model3D ref={sectionsRefs.app} />
      </div>
      <Header activeSection={activeSection}></Header>
      <div className="p-3">
        <About ref={sectionsRefs.about}></About>
        <Experience ref={sectionsRefs.experience}></Experience>
        <Projects ref={sectionsRefs.projects}></Projects>
        <Skills ref={sectionsRefs.skills}></Skills>
        {/* <Contact ref={sectionsRefs.contact}></Contact> */}
      </div>
    </div>
  )
}

export default App

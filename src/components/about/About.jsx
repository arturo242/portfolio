import { forwardRef } from 'react'
import {Tag} from '../../assets'

const returnAge = (birthday) => {
  var today = new Date()
  var birthday = new Date(birthday)
  var age = today.getFullYear() - birthday.getFullYear();
  var m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
  }

  return age;
}

export const About = forwardRef((props, ref) => {
  return (
    <>
      <div className="visualHeader"></div>
      <section id="arturo" className='flex column-responsive flex-center-y gap-2'>
        <img src="https://github.com/arturo242.png"/>
        <div>
          <h1 id="mainTitle" className="font-size-2 mb-0">Arturo Castillo López</h1>
          <h3 className='color-secondary mt-0'>Fullstack Developer, +3 years experience</h3>
        </div>
      </section>
        <div className="flex flex-center-x gap-1">
          <Tag icon="line-md:map-marker-alt-filled" text="España" />
          <Tag icon="line-md:account" text={returnAge("10-04-1999")}/>
          <Tag icon="line-md:github-loop" text="" href="https://github.com/arturo242"/>
          <Tag icon="line-md:linkedin" text="" href="https://www.linkedin.com/in/arturo-castillo-l%C3%B3pez-637aa21b9/"/>
        </div>
      <div ref={ref} id="about" className="visualHeader"></div>
      <h2 className="mt-1 color-secondary">About me</h2>
      <div>
        <p>I'm  a passionate and experienced Full-Stack Web Developer specializing in both front-end and back-end technologies. With several years of experience in Laravel, React, and system integrations, I have developed a keen ability to build robust and scalable web applications. My journey in the tech world has allowed me to work extensively with databases, version control, and Docker, ensuring smooth project deployments and maintenance.</p>

        <p>In addition to my web development skills, I have expertise in motion design and video editing, with proficiency in After Effects and Blender. I’m constantly learning new technologies and thrive in dynamic environments where creativity and innovation are at the forefront.</p>

        <p>Let’s build something great together!</p>
        <div className='buttons flex flex-center-x'>
          <Tag icon="line-md:email" text="Contact me" href="mailto:arturocastill0010@gmail.com"/>
        </div>
      </div>
    </>
  )
})

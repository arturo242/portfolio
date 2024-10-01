import { forwardRef, useState } from "react"
import { Icon } from '@iconify/react';

export const Experience = forwardRef((props, ref) => {

  const toggleOpen = (e) => {
    e.currentTarget.parentElement.classList.toggle('open')
    e.currentTarget.querySelector('span').classList.toggle('rotate-45')
  };
  return (
    <>
      <div ref={ref} id="exp" className="visualHeader"></div>
      <h2 className="color-secondary">Experience</h2>
        <article className="card-collapsed mt-3">
            <div className='card-title p-3 flex flex-center-y gap-5 cursor-pointer' onClick={toggleOpen}>
                <span className={`transition font-size-2`}>+</span>
                <div>
                  <h3> Fullstack Developer at Grupo Control</h3>
                  <span className="color-info">Apr 2021 - Feb 2024</span>
                </div>
            </div>

             
            <div className={`card-content bg-primary`}>
                <ul className="p-4">
                  <li>Extensive experience in fullstack development in Laravel.</li>
                  <li>Knowledge in frontend development with React.</li>
                  <li>Maintenance and resolution of support incidents.</li>
                  <li>Experience in systems integration and relational database management.</li>
                  <li>Swagger API documentation knowledge.</li>
                  <li>GIT versions control.</li>
                  <li>Creation of projects with Docker.</li>
                  <li>Extensive experience in workflow-based development.</li>
                  <li>“React: de cero a experto” course by Fernando Herrera.</li>
                </ul>
            </div>
        </article>

        <article className="card-collapsed mt-3">
            <div className='card-title p-3 flex flex-center-y gap-5 cursor-pointer' onClick={toggleOpen}>
                <span className={`transition font-size-2`}>+</span>
                <div>
                  <h3> Fullstack Developer Freelancer</h3>
                  <span className="color-info">Feb 2024 - Today</span>
                </div>
            </div>            
            <div className={`card-content bg-primary`}>
                <ul className="p-4">
                  <li>Creating web pages from scratch with React or Next.js.</li>
                  <li>Analysis and structuring of databases.</li>
                </ul>
            </div>
        </article>
    </>
  )
})

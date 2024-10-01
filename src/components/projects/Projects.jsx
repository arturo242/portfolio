
import { forwardRef } from "react"
import { Tag } from "../../assets"
import { Icon } from '@iconify/react';

export const Projects = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} id="projects" className="visualHeader"></div>
      <h2 className="color-secondary">Projects</h2>
      <div className="projects flex flex-direction-column gap-5">
        <article className="project">
          <div className="flex flex-center-y gap-2 flex-column-xs">
            <img className="rounded" height={200} src="/images/replovers.png" />
            <div className="flex flex-direction-column">
              <div>
                <h3 className="mt-0">RepLovers - Online Shop</h3>
                <div className="techs">
                  <span className="flex flex-center-y gap-1"><Icon icon="devicon:nextjs" /> Next.js</span>
                  <span className="flex flex-center-y gap-1"><Icon icon="devicon:tailwindcss" /> Tailwind CSS</span>
                </div>
                <p className="color-info">Online store dedicated to find products from the Chinese market, it has a link converter to different Chinese agents. Made with Next.js, JavaScript and Tailwind.</p>
              </div>
              <div className="flex gap-2">
                <Tag icon="line-md:github-loop" text="Code" href="https://github.com/arturo242/replovers"/>
                <Tag icon="line-md:link" text="Preview" href="https://replovers.com"/>
              </div>
            </div>
          </div>
        </article>
        <article className="project">
          <div className="flex flex-center-y gap-2 flex-column-xs">
            <img className="rounded" height={200} src="/images/portfolio.png" />
            <div className="flex flex-direction-column">
              <div>
                <h3 className="mt-0">My portfolio</h3>
                <div className="techs">
                  <span className="flex flex-center-y gap-1"><Icon icon="devicon:react" /> React</span>
                  <span className="flex flex-center-y gap-1 color-white"><Icon icon="tabler:brand-threejs" /> three.js</span>
                  <span className="flex flex-center-y gap-1"><Icon icon="skill-icons:css" /> CSS</span>
                </div>
                <p className="color-info">Made with React, a custom CSS and ThreeJS for the background</p>
              </div>
              <div className="flex gap-2">
                <Tag icon="line-md:github-loop" text="Code" href="https://github.com/arturo242/portfolio"/>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
})
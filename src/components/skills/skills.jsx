import { forwardRef } from "react"
import { Tag } from "../../assets"

export const Skills = forwardRef((props, ref) => {
  return (
  <>
    <div ref={ref} id="skills" className="visualHeader"></div>
    <h2 className="color-secondary">Skills</h2>
    <div className="skills">
      <Tag icon="devicon:html5" text="Html5" />
      <Tag icon="skill-icons:css" text="CSS" />
      <Tag icon="openmoji:javascript" text="JS" />
      <Tag icon="logos:php" text="PHP" />
      <Tag icon="logos:laravel" text="Laravel" />
      <Tag icon="devicon:react" text="React" />
      <Tag icon="devicon:nextjs" text="Next.js" />
      <Tag icon="devicon:angular" text="Angular" />
      <Tag icon="tabler:brand-threejs" text="three.js" />
      <Tag icon="devicon:mysql" text="MySQL" />
      <Tag icon="devicon:git" text="GIT" />
      <Tag icon="devicon:docker" text="Docker" />
    </div>
  </>
  )
})


export const Header = ({activeSection}) => {
  return (
    <header className="header flex flex-center-y justify-content-between">  
        <div className="logo bold menu-item"><a href="/">
            <span className="color-secondary">Arturo</span>
            <span className=""> C.</span>
            </a></div>
        <ul className="menu flex gap-2 hidden-xs">
            <li><a className={`menu-item ${activeSection == "about" ? "active" : ""}`} href="#about">About me</a></li>
            <li><a className={`menu-item ${activeSection == "experience" ? "active" : ""}`} href="#exp">Experience</a></li>
            <li><a className={`menu-item ${activeSection == "projects" ? "active" : ""}`} href="#projects">Projects</a></li>
            <li><a className={`menu-item ${activeSection == "skills" ? "active" : ""}`} href="#skills">Skills</a></li>
            <li><a className={`menu-item ${activeSection == "contact" ? "active" : ""}`} href="mailto:arturocastill0010@gmail.com">Contact</a></li>
        </ul>
    </header>
  )
}

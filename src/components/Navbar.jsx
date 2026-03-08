export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        fulla<span>.dev</span>
      </div>
      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
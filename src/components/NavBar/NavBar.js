import "./NavBar.css";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="navBar">
      {/* first half: About, Work Exp, Projects, Book Review */}
      <section class="container">
        <div class="one">
          <NavBarItem name = "About"/>
          <NavBarItem name = "Work Experience"/>
          <NavBarItem name = "Projects"/>
          <NavBarItem name = "Book Reviews"/>
        </div>
        <div class="two">
          <NavBarItem name ="LinkedIn"/>
          <NavBarItem name ="Github" />
          <NavBarItem name ="Email"/>
        </div>
      </section>
    </div>
  );
};
export default NavBar;

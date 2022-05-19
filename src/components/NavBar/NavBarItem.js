import "./NavBar.css";
const NavBarItem = (props) => {
  return (
    <div>
      <b className = "navBarItem">{props.name}</b>
    </div>
  );
};

export default NavBarItem;

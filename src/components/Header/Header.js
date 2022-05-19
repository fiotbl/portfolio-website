import "./Header.css";
import pixelpfp from "../../assets/pixelpfp.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__profilepfp" src={pixelpfp} alt="pixelpfp" />
      <b className="header__name">Fiora Tan Bei Lun</b>
    </div>
  );
};

export default Header;

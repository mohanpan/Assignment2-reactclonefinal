import "./styles.css";
import * as FaIcons from "react-icons/fa";

export const IKEAHomepage = () => {
  return (
    <>
      <div className="home-page">
        <Link to ="#" className='menu-bars'>
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-meanu'}>

      </nav>
    </>
  );
};
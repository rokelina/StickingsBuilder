import NavBar from '../NavBar/NavBar';
import './SideNavBar.css';

function SideNavBar() {
  return (
    <NavBar classname="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">Eight Notes</li>
        <li className="nav-item">Triplet Notes</li>
        <li className="nav-item">Random</li>
      </ul>
    </NavBar>
  );
}

export default SideNavBar;

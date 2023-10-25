import Snare from '../../assets/icons/Snare';
import './TopNavBar.css';

function TopNavBar() {
  return (
    <nav className="top-nav">
      <div className="title-logo">
        <Snare />
        <h1>STICKINGS BUILDER</h1>
      </div>
    </nav>
  );
}
export default TopNavBar;

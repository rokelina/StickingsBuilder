import Snare from '../Icons/Snare';
import './TopNavBar.css';

function TopNavBar() {
  return (
    <header>
      <nav className="top-nav">
        <div className="title-logo">
          <Snare />
          <h1>STICKINGS BUILDER</h1>
        </div>
      </nav>
    </header>
  );
}
export default TopNavBar;

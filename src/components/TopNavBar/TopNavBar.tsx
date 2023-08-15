import Button from '../Button/Button';
import Snare from '../../assets/icons/Snare';
import './TopNavBar.css';

function TopNavBar() {
  // add log in buttons

  return (
    <nav className="top-nav">
      <Snare />
      <h1>Stickings Builder</h1>
      <div className="login-signup">
        <Button idName="log-in-btn">Log In</Button>
        <Button idName="sign-up-btn">Sign Up</Button>
      </div>
    </nav>
  );
}
export default TopNavBar;

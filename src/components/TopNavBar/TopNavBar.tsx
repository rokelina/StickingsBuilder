import Button from '../Button/Button';
import Snare from '../../assets/icons/Snare';
import './TopNavBar.css';

function TopNavBar() {
  return (
    <nav className="top-nav">
      <Snare />
      <h1>STICKINGS BUILDER</h1>
      <div className="login-signup">
        <Button idName="log-in-btn">LOG IN</Button>
        <Button idName="sign-up-btn">SIGN UP</Button>
      </div>
    </nav>
  );
}
export default TopNavBar;

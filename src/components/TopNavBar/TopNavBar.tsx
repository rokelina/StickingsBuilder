import Button from '../Button/Button';
import './TopNavBar.css';

function TopNavBar() {
  // add log in buttons

  return (
    <nav className="top-nav">
      <h1>Stickings Builder</h1>
      <div className="login-signup">
        <Button idName="log-in-btn">Log In</Button>
        <Button idName="sign-up-btn">Sign Up</Button>
      </div>
    </nav>
  );
}
export default TopNavBar;

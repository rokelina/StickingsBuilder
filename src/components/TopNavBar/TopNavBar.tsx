import NavBar from '../NavBar/NavBar';
import './TopNavBar.css';

/* TopNavBar components
- MetronomeBpm
- Repeats
 */

function TopNavBar() {
  return (
    <NavBar classname="metronome-options">
      <div>Child 1</div>
      <div>Child 2</div>
    </NavBar>
  );
}

export default TopNavBar;

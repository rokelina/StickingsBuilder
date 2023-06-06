import PlaybackControls from '../PlaybackControls/PlaybackControls';
import TopNavBar from '../TopNavBar/TopNavBar';
import './MainWrapper.css';

/* MainWrapper components:
- TopNavBar ✔️
- PlaybackControls ✔️
- VexflowNotes
_ Stickings Menu
 */

interface Props {
  displayMenu: string;
}
function MainWrapper({ displayMenu }: Props) {
  return (
    <main>
      <TopNavBar />
      <PlaybackControls />
      {displayMenu === 'eighth-notes' && <h1>Eighth notes</h1>}
      {displayMenu === 'triplet-notes' && <h1>Triplets notes</h1>}
      {displayMenu === 'random-stickings' && <h1>Random notes</h1>}
    </main>
  );
}

export default MainWrapper;

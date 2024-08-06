import { Divider } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div>
        <section>
          <h3>About</h3>
          <br />
          <Divider component="div" />
          <p>
            👋 Hi! Thanks for visiting my web app!
            <br />
            <br />
            Stickings Builder is a tool for drummers, percussionists and music
            students, inspired by the legendary book
            <span style={{ fontStyle: 'italic' }}>Stick Control</span>.
            <br />
            <br />
            It runs in the browser and can be installed in desktop and mobile
            devices.
            <br />
            <br />
            Select your own combinations or randomly generate a stickings
            sequence. Log in and save to your account to practice on the go!
            <br />
            <br />I hope you find this app useful and enjoy it as much as I
            enjoyed building it 🙂
          </p>
        </section>
        <br />
        <section>
          <h3>Contact</h3>
          <br />
          <Divider component="div" />
          <p>Feedback, questions or feature requests:</p>
          <div>
            <a href="https://github.com/rokelina" target="_blank">
              <button>
                GitHub
                <span aria-label="github logo">
                  <FaGithub size={'1rem'} />
                </span>
              </button>
            </a>
            <a href="https://linkedin.com/in/rosinascampino" target="_blank">
              <button>
                LinkedIn
                <span aria-label="linkedin logo">
                  <FaLinkedin size={'1rem'} />
                </span>
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
export default About;

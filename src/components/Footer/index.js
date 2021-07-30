import { FaGithub, FaLinkedin, FaQuora } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div id="ft-icons">
        <a href="https://github.com/dkbaffour777" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/daniel-baffour-7a1885190/" target="_blank"><FaLinkedin /></a>
        <a href="https://www.quora.com/profile/Daniel-Baffour-5" target="_blank"><FaQuora /></a>
      </div>
      <p id="copy-right">&copy;{` Daniel Baffour - ${new Date().getFullYear()}`}</p>
    </footer>
  );
}

export default Footer;
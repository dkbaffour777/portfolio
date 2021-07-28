import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', fontSize: '25px', marginBottom: '30px', zIndex: '999'}}>
        <FaGithub />
        <FaLinkedin />
      </div>
      <p id="copy-right">&copy;{` Daniel Baffour - ${new Date().getFullYear()}`}</p>
    </footer>
  );
}

export default Footer;
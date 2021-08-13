import Nav from '../Nav';
import images from '../../assets/images';

const Header =()=> {
    return (
        <header>
            <div className="logo-wrapper">
                <h1>
                    Daniel Baffour <img id="logo" src={images.logo} alt="logo"/><br/><span id="title">Full Stack Web Developer</span>
                </h1>
            </div>
            <Nav/>
        </header>  
    );
}

export default Header;
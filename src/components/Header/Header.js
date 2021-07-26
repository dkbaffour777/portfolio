import profile_pic from '../../assets/images/profile-picture.jpg'
import header_bImg from '../../assets/images/background-theme.jpg'

const Header =()=> {
    return (
        <header style={{backgroundImage: `url(${header_bImg})`}}>
            <div class="dark-layer primary-dl"></div>
            <div class="logo-wrapper">
                <img src={profile_pic} alt="Daniel Baffour"/>
                <h1>
                    Daniel Baffour <br/> <span id="title"></span>
                </h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">About</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>  
    );
}

export default Header;
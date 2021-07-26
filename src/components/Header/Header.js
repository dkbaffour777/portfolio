import Nav from '../Nav/Nav';
import profile_pic from '../../assets/images/profile-picture.jpg'

const Header =()=> {
    return (
        <header>
            <div class="dark-layer primary-dl"></div>
            <div class="logo-wrapper">
                <img src={profile_pic} alt="Daniel Baffour"/>
                <h1>
                    Daniel Baffour <br/> <span id="title"></span>
                </h1>
            </div>
            <Nav />
        </header>  
    );
}

export default Header;
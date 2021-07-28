import Nav from '../Nav';
import profile_pic from '../../assets/images/profile-picture.jpg'

const Header =({currentPage, setCurrentPage})=> {
    return (
        <header>
            <div className="dark-layer primary-dl"></div>
            <div className="logo-wrapper">
                <img className="prof-pic" src={profile_pic} alt="Daniel Baffour" />
                <h1>
                    Daniel Baffour <br/> <span id="title">Full Stact Web Developer</span>
                </h1>
            </div>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>  
    );
}

export default Header;
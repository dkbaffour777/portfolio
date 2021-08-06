import Nav from '../Nav';

const Header =()=> {
    return (
        <header>
            <div className="dark-layer primary-dl"></div>
            <div className="logo-wrapper">
                <h1>
                    Daniel Baffour <br/> <span id="title">Full Stact Web Developer</span>
                </h1>
            </div>
            <Nav/>
        </header>  
    );
}

export default Header;
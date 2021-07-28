import Nav from '../Nav';

const Header =({currentPage, setCurrentPage})=> {
    return (
        <header>
            <div className="dark-layer primary-dl"></div>
            <div className="logo-wrapper">
                <h1>
                    Daniel Baffour <br/> <span id="title">Full Stact Web Developer</span>
                </h1>
            </div>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>  
    );
}

export default Header;
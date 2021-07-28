
const Nav = ({currentPage, setCurrentPage}) => {
    const navLinks = ['About me', 'Portfolio', 'Contact', 'Resume']

    return (
        <nav>
            <ul>
                {
                    navLinks.map((link, i)=>
                        <li 
                            key={i}
                            onClick={() => setCurrentPage(link)}
                        >
                            <button className={currentPage === link ? "navLink active" : "navLink"}>
                                {link}
                            </button>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default Nav;
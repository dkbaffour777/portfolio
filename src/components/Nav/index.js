import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const navLinks = ['About me', 'Portfolio', 'Contact', 'Resume']
    const [activeLink, setActiveLink] = useState('about');

    const location = useLocation();
    
    useEffect(()=> {
        const currentLocation = location.pathname.slice(1)
        currentLocation ? setActiveLink(currentLocation) : setActiveLink('about')
    }, [location])

    return (
        <nav>
            <ul>
                {
                    navLinks.map((link, i)=>
                        <Link 
                            to={link.split(' ')[0].toLowerCase()}
                            key={i}
                        >
                            <button className={activeLink === link.split(' ')[0].toLowerCase() ? "navLink active" : "navLink"}>
                                {link}
                            </button>
                        </Link>
                    )
                }
            </ul>
        </nav>
    );
}

export default Nav;
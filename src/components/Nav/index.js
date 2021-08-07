import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const navLinks = ['About me', 'Projects', 'Contact', 'Resume']
    const defaultPath = '/portfolio/about';
    const [activeLink, setActiveLink] = useState(defaultPath);

    const location = useLocation();

    useEffect(() => {
        const currentLocation = location.pathname
        currentLocation === '/portfolio' || currentLocation === '/portfolio/' ?
            setActiveLink(defaultPath) : setActiveLink(currentLocation)
    }, [location])

    return (
        <nav>
            <ul>
                {
                    navLinks.map((link, i) =>
                        <button
                            key={i}
                            className={
                                activeLink === `/portfolio/${link.split(' ')[0].toLowerCase()}`
                                    ? "navLink active" : "navLink"
                            }
                        >
                            <Link
                                to={`/portfolio/${link.split(' ')[0].toLowerCase()}`}
                            >
                                {link}
                            </Link>
                        </button>
                    )
                }
            </ul>
        </nav>
    );
}

export default Nav;
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';

function Header({ user }) {

    const navLinks = useRef()

    function handleClick() {
        if(navLinks.current.classList.contains('hidden')) {
            navLinks.current.classList.remove('hidden')
        }
        else {
            navLinks.current.classList.add('hidden')
        }
    }

    return (
        <header className="md:border-b-2 border-amber-900 border-double ">
            <nav className="relative">
                <div className="flex justify-between items-center md:block">
                    <h1 className="app-name">A r t S m a r t</h1>
                    {user ? <h2 className="hello-user">hello, {user.name.toLowerCase()}!</h2> : <h2 className="hello-user">loading...</h2>}
                    <div onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 burger-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
                <div className="hidden nav-links" ref={navLinks}>
                    <div className="nav-link-btn">
                        <NavLink exact to="/">
                            home
                        </NavLink>
                    </div>
                    <div className="nav-link-btn">
                        <NavLink exact to='/mygallery'>
                            my gallery
                        </NavLink>    
                    </div>
                    <div className="nav-link-btn">
                        <NavLink exact to='/profile'>
                            profile
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <h1 className="text-3xl p-4">ArtSmart</h1>
                <div className="nav-links">
                    <div className="m-2">
                        <NavLink exact to="/">
                            home
                        </NavLink>
                    </div>
                    <div className="m-2">
                        <NavLink exact to='/mygallery'>
                            my gallery
                        </NavLink>    
                    </div>
                    <div className="m-2">
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
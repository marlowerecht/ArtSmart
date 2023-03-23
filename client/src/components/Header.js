import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <h1 className="text-3xl p-4">ArtSmart</h1>
                <div>
                    <NavLink exact to="/">
                        home
                    </NavLink>
                    <NavLink exact to='/mygallery'>
                        my gallery
                    </NavLink>
                    <NavLink exact to='/profile'>
                        profile
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;
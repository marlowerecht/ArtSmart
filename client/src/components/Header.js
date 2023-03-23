import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <h1>
                    {/* <span className="logo">{"//"}</span> */}
                    <Link to="/homepage">
                        Home
                    </Link>
                </h1>
                <div>
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
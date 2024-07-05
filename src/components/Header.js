import React from 'react';
import { Link } from 'react-router-dom';

let Header = () => {

    return(
        <>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <Link to={"/"} className="navbar-brand col-sm-3 col-md-2 mr-0">Company name</Link>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" autoComplete="off" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                    <Link to={"/Signout"} className="nav-link">Sign out</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
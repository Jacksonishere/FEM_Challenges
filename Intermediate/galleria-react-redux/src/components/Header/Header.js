import React from 'react'
import logo from '../../assets/shared/logo.svg';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <img src={logo} alt="" />
                <Link className="start" to="/">Start Slideshow</Link>
            </div>
        </header>
    )
}

export default Header

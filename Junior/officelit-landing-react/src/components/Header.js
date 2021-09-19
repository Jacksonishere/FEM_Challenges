import React from 'react'
import logo from '../assets/shared/logo.svg';

const Header = ({className}) => {
    return (
        <header className={`header ${className ? "header-bg" : ""}`}>
            <figure className="container">
                <img src={logo} alt="logo" />
            </figure>
        </header>
    )
}

export default Header

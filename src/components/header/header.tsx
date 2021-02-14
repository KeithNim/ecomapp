import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo.svg'
import './header.styles.scss'

const Header = () => {

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='menu'>
                <Link className='menu-item'to='/'>Home</Link>
                <Link className='menu-item'to='/shop'>Shop</Link>
                <Link className='menu-item'to='/contact'>Contact</Link>
                <Link className='menu-item'to='/signin'>Sign In</Link>
            </div>
        </div>
    )
}

export default Header
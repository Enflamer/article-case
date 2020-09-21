import React from 'react'
import '../style/navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo"></div>
            <div className="navbar-group">
                <div className='navbar-group-element navbar-group-element__user'>
                    Аккаунт
                </div>
                <div className='navbar-group-element navbar-group-element__vps'>
                    Vps
                </div>
                <div className='navbar-group-element navbar-group-element__domen'>
                    Домены
                </div>
                <div className='navbar-group-element navbar-group-element__help'>
                    Бортовой журнал
                </div>
            </div>
        </div>
    )
}

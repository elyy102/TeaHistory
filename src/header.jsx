import React from 'react'
import Logo from './assets/icons/icon-logo.svg'
import User from './assets/icons/person.fill.svg'
import Card from './assets/icons/bag.fill.svg'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
    <div className="wrapper">
        <div className="header">
        <ul className="menu">
                <li><a href="">Главная</a></li>
                <li><a href="">О нас</a></li>
                <li><a href="">Каталог</a></li>
        </ul>
        <div className="logo">
            <img src={Logo} />
            <h1>Tea History</h1>
        </div>
        <ul className="menu">
            <li><a href="">Доставка</a></li>
            <li><a href="">Контакты</a></li>
        </ul>
        <div className="header_icons">
                <img src={User} />
                <img src={Card} />
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Header
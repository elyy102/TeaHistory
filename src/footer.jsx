import React from 'react'
import Logo from './assets/icons/footer-logo.svg'
import Inst from './assets/icons/inst.svg'
import Tg from './assets/icons/tg.svg'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <>
    <div className="footer">
    <div className="wrapper">
            <div className="footer_logo">
                <img src={Logo} />
                <h1>Tea History</h1>
            </div>
                <ul className='footer_menu'>
                  <li><a href="">Главная</a></li>
                  <li><a href="">О нас</a></li>
                  <li><a href="">Каталог</a></li>
                  <li><a href="">Доставка</a></li>
                  <li><a href="">Контакты</a></li>
                </ul>
            <div className="footer_icons">
                    <img src={Inst} />
                    <img src={Tg} />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer
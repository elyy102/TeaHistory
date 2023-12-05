import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
    <div className="wrapper">
        <div className="home">
            <div className="home_img_containers">
                <div className="home_img_container_1"></div>
                <div className="home_img_container_2"></div>
                <div className="home_img_container_3"></div>
            </div>
            <h1 className="home_h1">Tea History</h1>
            <p className="home_p">Огромный выбор сортов, свежие поступления, опытные консультанты и яркие вкусы!</p>
            <button className='home_btn'>В каталог</button>
        </div>
    </div>
    
    </>
  )
}

export default Home
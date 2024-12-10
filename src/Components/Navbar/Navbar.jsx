import React from 'react';
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className={style.logo}>
        <img src="https://t4.ftcdn.net/jpg/03/92/57/03/360_F_392570366_ha3O3TP06R3Cgz86UgSGeUGKYgC9AKlh.jpg" alt="Shoe-store" width={90} height={90}/>
    
        </div>
       <div className={style.navigation}>
       <ul>
            <li className={style.navItem}>Home</li>
            <li className={style.navItem}>Products</li>
            <li className={style.navItem}>Services</li>
            <li className={style.navItem}>Cart</li>
            <li className={style.navItem}>Login</li>
        </ul>
       </div>
    </nav>
    
    </>
  )
}

export default Navbar
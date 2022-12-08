import React from 'react'
import styles from './Menu.module.scss'
import logo from  '../../assets/images/logo.webp'
import {Link} from 'react-router-dom';

const Menu: React.FC = () => {

  return (
    <div className={styles.menuWrap}>
      <div className={styles.logo}>
        <img src={logo} className={styles.logoImage}/>
      </div>
      <Link to="calculators" className={styles.menuLink}>Калькуляторы</Link>
      <Link to="documents" className={styles.menuLink}>Документы</Link>
    </div>
  )
}

export default Menu

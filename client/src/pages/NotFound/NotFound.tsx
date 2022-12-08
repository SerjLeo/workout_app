import React from 'react'
import {Link} from 'react-router-dom'
import image from  '../../assets/images/404.gif'
import styles from './NotFound.module.scss'

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <img src={image} alt=""/>
      <div>Page Not Found</div>
      <Link to="/">Home Page</Link>
    </div>
  )
}

export default NotFound

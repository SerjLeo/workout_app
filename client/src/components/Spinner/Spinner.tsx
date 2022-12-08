import React from 'react'
import SpinnerModule from './Spinner.module.scss'
import image from '../../assets/images/loader.gif';

const Spinner: React.FC = () => {
  return (
    <div className={SpinnerModule.loader__wrap}>
      <img src={image} alt=""/>
    </div>
  )
}

export default Spinner

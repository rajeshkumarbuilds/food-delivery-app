import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p className='uppercase'>For Better experience download <br /> Tomato app</p>
        <div className="app-platform">
            <img src={assets.play_store} alt="playstore" />
            <img src={assets.app_store} alt="appstore" />
        </div>
    </div>
  )
}

export default AppDownload
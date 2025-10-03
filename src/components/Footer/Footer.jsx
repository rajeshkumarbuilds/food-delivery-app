import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-content">
                <div className="left">
                    <img src={assets.logo} alt="logo" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quibusdam!</p>
                    <div className="footer-icon">
                        <a href="https://www.linkedin.com/in/rajesh-builds/" target='blank'> <img src={assets.facebook_icon} alt="facebook_icon" /></a>
                        <a href="https://www.linkedin.com/in/rajesh-builds/" target='blank'>  <img src={assets.twitter_icon} alt="twitter_icon" /></a>
                        <a href="https://www.linkedin.com/in/rajesh-builds/" target='blank'>     <img src={assets.linkedin_icon} alt="linkedin_icon" /></a>
                    </div>
                </div>
                <div className="center">
                    <h2>Company</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="right">
                    <h2>Get it touch</h2>
                    <ul>
                        <li>Phone:+918059513292</li>
                        <li>Email:rajeshkumar.builds@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025  &copy;Tomato.com -All RIght Reserved.</p>
        </div >
    )
}

export default Footer
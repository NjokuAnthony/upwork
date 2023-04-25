import React from 'react'
import "./footer.css"
import { FaBolt, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='first'>
                <div className="row1">
                    <FaBolt />
                    <span>NjokuAnthony</span>
                </div>
                <div className="row2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima fugiat officiis quibusdam laborum sed alias amet ipsa impedit reiciendis provident?
                </div>
                <div className="row3">
                    <FaTwitter />
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedinIn/>
                    <FaYoutube />
                </div>
            </div>
            <div className='second'>
                <ul>
                    <li><h3>LINKS</h3></li>
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">Faeatures</a></li>
                    <li> <a href="3">About Us</a></li>
                    <li> <a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className='third'>
                <ul>
                    <li><h3>SUPPORT</h3></li>
                    <li> <a href="#">FAQ</a></li>
                    <li> <a href="#">Help Center</a></li>
                    <li> <a href="3">Security</a></li>
                    <li> <a href="#">Accounts</a></li>
                </ul>
            </div>
            <div className='fourth'>
                <ul>
                    <li><h3>LEGAL</h3></li>
                    <li> <a href="#">Privacy Policy</a></li>
                    <li> <a href="#">Term and Conditions</a></li>
                    <li> <a href="3">Security</a></li>
                    <li> <a href="#">Accounts</a></li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer
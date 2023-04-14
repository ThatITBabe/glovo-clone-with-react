import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
    <div className='footz'> 
        <section>
            <div class="custom-shape-divider-bottom-1681372884">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>

        <div className="footerz">
            <div className="logohffh">
                <img src="glovow.svg" alt=""/>
            </div>
            <div class="container">
                <div class="row footerlinks">
                    <div class="col foottings">
                        <h3>Let’s do it together</h3>
                        <a href="#">Careers</a>
                        <a href="#">Glovo for Partners</a>
                        <a href="#">Couriers</a>
                        <a href="#">Glovo Business</a>
                    </div>
                    <div class="col foottings">
                        <h3>Links of interest</h3>
                        <a href="#">About us</a>
                        <a href="#">FAQ</a>
                        <a href="#">Glovo Prime</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact us</a>
                        <a href="#">Security</a>
                    </div>
                    <div class="col foottings">
                        <h3>Follow us</h3>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                    <div class="col foottings">
                        <div className="btndownload">
                            <a href="#"><img src="appstore.svg" alt="" /></a>
                            <a href="#"><img src="playstore.svg" alt="" /></a>
                        </div >
                        <a href="#">TERMS & CONDITIONS</a>
                        <a href="#">PRIVACY POLICY</a>
                        <a href="#">COOKIES POLICY</a>
                        <a href="#">COMPLIANCE</a>
                    </div>
                </div>
            </div>
            <div className="languages">
                <div className="lang-options">
                    <select name="" id="" className='myOptions'>
                        <option className='opt-text'><a href="">English</a></option>
                        <option className='opt-text'><a href="">Dutch</a></option>
                        <option className='opt-text'><a href="">Spanish</a></option>
                        <option className='opt-text'><a href="">French</a></option>
                    </select>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
import React, { useState } from 'react';
import Header from './Header/Header';
// import styles from '../styles/Nav.module.css';

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
                <div className="header-area">
                    <div className="container">
                        <div className="inner-header-area">
                            <div className="header-left">
                                <a href="#"><img src="/assets/logo.png" /></a>
                            </div>

                            <div className="header-right">
                                <ul>
                                    <li><a href="#">features</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">ido launchpad</a></li>
                                    <div className="clear"></div>					</ul>
                            </div>
                            <div className="header-right-1">
                                <span><a href="#"><img src="/assets/group-1.png" /></a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mobile-area">
                    <div class="container">
                        <div class="mobile-logo">
                            <a href="/"><img src="/assets/logo.png" /></a>
                        </div>

                        {/* <div class="mobile-menu">
                            <button onclick={() => { setShow(!show) }}>click</button>
                            <span style={{ fontSize: "30px", cursor: "pointer" }}><img src="/assets/hamburger-icon.png" class="hamburger" /></span>
                            {

                            }

                        </div> */}
                        <div class="clear"></div>
                    </div>
                </div>
                
                
            </div>
    )
}
export default Navbar
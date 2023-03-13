import React, { useState } from 'react';
import Header from './Header/Header';
// import styles from '../styles/Nav.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
                <div className="header-area">
                    <div className="container">
                        <div className="inner-header-area">
                            <div className="header-left">
                                <a href="#"><img src="/assets/padmondaoblueoutline-1.png" /></a>
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
                            <a href="/"><img src="/assets/padmondaoblueoutline-1.png" /></a>
                        </div>

                        <div class="mobile-menu">
                        {
                                show?<span style={{ fontSize: "30px", cursor: "pointer",color:"white",fontSize:"30px"}} onClick={()=>{setShow(!show)}}><AiOutlineClose className='hamburger'/></span>:<span style={{ fontSize: "30px", cursor: "pointer",color:"white",fontSize:"30px" }} onClick={()=>{setShow(!show)}}><AiOutlineMenu className='hamburger'/></span>
                            }

                            
                        </div>
                    </div>
                    {
                            
                            show?<div id="myNav" class="overlay">
                            <div class="overlay-content">
                                <a href="#">Game</a>
                                <a href="#">NFTs</a>
                                <a href="#">Unlock wallet</a>
                                
                                
                                
                            
                            </div>
                        </div>	:""
                            }
                   
                </div>
                
                
            </div>
    )
}
export default Navbar
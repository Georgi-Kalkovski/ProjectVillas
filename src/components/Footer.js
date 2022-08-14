import React, { useState, useEffect } from 'react';
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';
import gmail from './img/gmail.svg';
import facebook from './img/facebook.svg';
import discord from './img/discord.svg';

const Footer = () => {
    
    return (
        <div className='footer'>
            <footer id='footer' className='text-center' >

                <nav id='footerNav'>
                    <div className='container'>
                        <ul>
                        </ul>
                    </div>
                </nav>

                {/* <div id='copyright' className='grow'>
                    <a href='https://github.com/Georgi-Kalkovski/MyBookcase'>Made By Georgi Kalkovski</a>
                </div> */}

            </footer>
        </div>
    );
};

export default Footer;
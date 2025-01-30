import React from 'react';
import { useState } from 'react';

function Footer() {
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'opacity 0.2s',
        margin: '0 15px',
        opacity: '0.9',
    }

    return (
        <footer style={{
            backgroundColor: '#109d6c',
            padding: '25px 0',
            color: 'white',
            width: '100%',
        }}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <span style={{ fontSize: '14px' }}>Contact us: muqeetkhan050@gmail.com</span>
                    </div>
                    <div className='col-md-6'>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <a href='https://www.instagram.com/itsmuqeetkhan/' 
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={linkStyle}>
                                Instagram
                            </a>
                            <a href='https://www.linkedin.com/in/muhammadmuqeetkhan' 
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={linkStyle}>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
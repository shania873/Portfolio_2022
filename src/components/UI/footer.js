import React from 'react';
import './footer.scss';
import logoLinkedin from "../../assets/img/linkedin-logo.png"

export default function Footer() {
    return (
        <div className='set-footer'>
            <div className='item-footer--linkedin'>
                <img src={logoLinkedin} alt="logo-linkedin" />
            </div>
        </div>
    )
}
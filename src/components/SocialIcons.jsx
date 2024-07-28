import React from 'react';
import '../../src/index.css';

const SocialIcons = () => {
    return (
        <div className="wrapper">
            <a target='_blank' href="https://t.me/Ismoiljon_Dev_008" className="icon facebook">
                <span className="tooltip">Telegram</span>
                <i className="fa-brands fa-lg fa-telegram"></i>
            </a>
            <a target='_blank' href="https://github.com/Yusupov-Ismoiljon" className="icon twitter">
                <span className="tooltip">Github</span>
                <i className="fa-brands fa-lg fa-github"></i>
            </a>
            <a href="tel:+998932598079" target="_blank" className="icon phone">
                <span className="tooltip">Phone</span>
                <i className="fa-solid fa-lg fa-phone"></i>
            </a>
        </div>
    );
};

export default SocialIcons;
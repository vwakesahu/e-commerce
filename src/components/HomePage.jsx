import React from "react";
import './homepage.scss'
const HomePage = () => {


    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-items'>
                    <div className='content'>
                        <h1>Hats</h1>
                        <span>Subtitle</span>
                    </div>
                </div>
                <div className='menu-items'>
                    <div className='content'>
                        <h1>Sneakers</h1>
                        <span>Subtitle</span>
                    </div>
                </div>
                <div className='menu-items'>
                    <div className='content'>
                        <h1>Jackets</h1>
                        <span>Subtitle</span>
                    </div>
                </div>
                <div className='menu-items'>
                    <div className='content'>
                        <h1>Men</h1>
                        <span>Subtitle</span>
                    </div>
                </div>
                <div className='menu-items'>
                    <div className='content'>
                        <h1>Women</h1>
                        <span>Subtitle</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default HomePage;
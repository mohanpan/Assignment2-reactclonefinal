import "./styles.css";

import React from 'react';

function gotoShopPromPage(){
    alert('test');
}

function gotoAboutPage(){
    alert('test');
}

function gotoMuseumPage(){
    alert('test');
}

function gotoInternationalSalePage(){
    alert('test');
}

export const Navbar = () => {
    return (
        <div>
            <div className="logo">
            <img src="/img/IKEALogo.png" alt="IKEA Logo" />
            </div>
            <div className="navigation">
                
                <button onClick={gotoShopPromPage}>
                    Shop
                </button>
                <a href="https://about.ikea.com/" target="_blank">
                    <button>About IKEA</button>
                </a>
                <button onClick={gotoMuseumPage}>
                    IKEA Museum
                </button>
                <a href="https://ikeamuseum.com/en/" target="_blank">
                    <button>IKEA Museum</button>
                </a>
                <a href="https://about.ikea.com/en/contact/how-to-buy-ikea-products-from-a-different-country" target="_blank">
                    <button>International Sales</button>
                </a>
            </div>
        </div>
    );
}
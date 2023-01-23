import React from 'react'
import './styles/home.css';
import { Link } from "react-router-dom";


export const Home = () => {
  return (
    <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <span className="block text-6xl font-bold mb-1">Welcome to Bhramaand</span>
                <div className="text-6xl text-primary font-bold mb-3">Enjoy our services</div>
                <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               
                <Link className='links' to="login">Login</Link>
                <Link className='links link2' to="trail">Free-trial</Link>
                
            </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden img">
            <img src="assets/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)'}} />
        </div>
    </div>
  );
}

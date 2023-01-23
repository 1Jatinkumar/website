import React from 'react'
import { Link } from "react-router-dom";
import './styles/trail.css'
import { Button } from 'primereact';

export const Trial = () => {

  return (
    <>
      {/* navbar */}
      <div className="bg-bluegray-900 nav">
        <div className='template'>
          <Button className="discord" aria-label="Discord">
            <Link className=' text-100 no-underline btn' to="purchase">Get Premium 🔥</Link>
          </Button>
        </div>
      </div>



      <div style={{position:'relative'}}>
        <div style={{ position: 'relative' }}>
          {/* main div top */}
          <div style={{ left: '5%', width: "40%", position: 'absolute', top: '1rem', borderRadius: '10px', boxShadow: '2px 4px 4px 2px rgba(0,0,0,0.2)' }}>
            <div style={{ padding: '20px 20px ' }}>
              <div>
                <div style={{ position: "relative", top: "0", height: '50px' }}>
                  <div style={{ position: "absolute" }}><h2>Start your Trial </h2></div>
                  <div style={{ position: "absolute", right: "0" }}><Button className="p-button" label="start now"></Button></div>
                </div>
              </div>
              <div>
                <p style={{ marginBottom: '5px' }}>Trial Offer: What will I get in this Trial:</p>
                <p>Access to Premium Features: Webstory Generator, Article Generator, AI Article Writer, Bing Data Scraper</p>
                <div style={{ marginBottom: "5px", marginTop: '10px' }}><Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" ><span>AI Writer :  12k tokens  </span></Button></div>
                <div><Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" ><span>Bing Scraper :  14-day Previous Data</span></Button></div>
              </div>
            </div>
          </div>

          {/* main div right */}
          <div style={{ right: '10%', width: "40%", position: 'absolute', top: '1rem', borderRadius: '10px', boxShadow: '2px 4px 4px 2px rgba(0,0,0,0.2)' }}>
            <div style={{ padding: '20px 20px' }}>
              <div>
                <div style={{ position: "relative", top: "0", height: '50px' }}>
                  <div style={{ position: "absolute" }}><h2>Promo Code </h2></div>
                  <div style={{ position: "absolute", right: "0" }}><Button className="p-button" label="Enter promo code"></Button></div>
                </div>
              </div>

              <div>
                <p style={{ marginBottom: '5px' }}>You will get:</p>
                <p>Access to Premium Features: Webstory Generator, Article Generator, AI Article Writer, Bing Data Scraper</p>
                <div style={{ marginBottom: "5px", marginTop: '10px' }}><Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" ><span>Extra 2k token credit </span></Button></div>
                <div><Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" ><span>$10 Off your first purchase </span></Button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

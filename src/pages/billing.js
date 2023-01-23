import React from 'react';
import './styles/billing.css';
import { Card } from 'primereact/card';
import { BillingCard } from '../components/billingcard'

export const Billing = () => {
  return (
    <>
      <div style={{ borderRadius: '10px', boxShadow: '0px 4px 4px 2px rgba(0,0,0,0.2)' }}>

        <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
          <div className="font-bold mr-8">🔥 Hot Deals!</div>
          <div className="align-items-center hidden lg:flex">
            <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
          </div>
          <a href='#' className="flex align-items-center ml-2 mr-8">
            <span className="underline font-bold">Learn More</span>
          </a>
          <a href='#' className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
            <i className="pi pi-times"></i>
          </a>
        </div>



        <div>
          <h1 style={{ textAlign: "center" }}>Billing</h1>
          <div  style={{marginBottom:'2rem'}}>
            <div>You're subscription will expire on </div>
            <div>Your Monthly Invoice</div>
            <div>Your Last Subscription</div>
          </div>

        </div>
        <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />


        <div className='pricing' >
          <h1 style={{ textAlign: "center" }}>Pricing</h1>
          <div style={{ display: "flex" }}>
            <BillingCard title="Features" description=" description" price="Price" time="time period" token="token" newFeatures="New Features Add-on" customerSupport="Customer Support" multiUserAccess="Multi-User Access" affiliateCommision="Affiliate Commision" />
            <BillingCard title="Basic" description="Good for Exploring Services" price="6500" time="/month" token="12k" newFeatures="No" customerSupport="Email" multiUserAccess="No" affiliateCommision="6% per sale" />
            <BillingCard title="Professional" description="Good for Exploring Services" price="8600" time="/month" token="24k" newFeatures="Yes" customerSupport="Email & Whatsapp" multiUserAccess="Yes" affiliateCommision="8% per sale" />
            <BillingCard title="Premium" description="Ideal for Marketing Managers and Writing Agency" price="16000" time="/month" token="50k" newFeatures="Yes" customerSupport="1-on-1 Chat Support" multiUserAccess="Yes" affiliateCommision="8% per sale" />
          </div>
        </div>
      </div>
    </>
  )
}

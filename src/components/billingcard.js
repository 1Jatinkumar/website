import React from 'react'
import { Button } from 'primereact'


export const BillingCard=(props) =>{
    return (
        <>
            <div className="col-12 lg:col-4" style={{width:"350px"}}>
                <div className="p-3 h-full">
                    <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '6px' }}>
                        <div className="text-900 font-medium text-xl mb-2">{props.title}</div>
                        <div className="text-600">{props.description}</div>
                        <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                        <div className="flex align-items-center">
                            <span className="font-bold text-2xl text-900">{props.price}</span>
                            <span className="ml-2 font-medium text-600">{props.time}</span>
                        </div>
                        <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                        <ul className="list-none p-0 m-0 flex-grow-1">
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                <span>{props.token}</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                <span>{props.newFeatures}</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                <span>{props.customerSupport}</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                <span>{props.multiUserAccess}</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                <span>{props.affiliateCommision}</span>
                            </li>
                        </ul>
                        <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                        <Button label='Buy Now' className="p-3 w-full p-button-outlined" />
                    </div>
                </div>
            </div>
        </>
    );
}





import React from 'react';
import { InputText,Checkbox,Button } from 'primereact';
import './styles/login.css';
import { Link } from "react-router-dom";
 
export default function Login(){
  return (
    <div className="flex align-items-center justify-content-center logindiv">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
                <img src="assets/images/blocks/hero/hyper.svg" alt="hyper"/>
                <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                <Link to="signup" className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</Link>
            </div>

            <form method="post" action="http://ec2-3-87-22-8.compute-1.amazonaws.com:5000/endpoint" >
                <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                <InputText id="email" name="email" type="text" placeholder="Email address" className="w-full mb-3" />

                <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                <InputText id="password" name="password" type="password" placeholder="Password" className="w-full mb-3" />

                <div className="flex align-items-center justify-content-between mb-6">
                    <div className="flex align-items-center">
                        <Checkbox id="rememberme" /*onChange={e => setChecked(e.checked)} checked={checked}*/ className="mr-2" />
                        <label htmlFor="rememberme">Remember me</label>
                    </div>
                    <Link to='forgotpassword' className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</Link>
                </div>
                <Button label="Sign In" icon="pi pi-user" className="w-full" type="submit"/>
            </form>
        </div>
    </div>
    
  );
}

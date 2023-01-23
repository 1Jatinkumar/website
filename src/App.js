import React from 'react'
import './styles/app.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home'
import Login from './pages/Login'
import { Trial } from './pages/trial';
import { Signup } from './pages/signup';
import { Billing } from './pages/billing';
import { WebStoryGenrator } from './pages/webStoryGenrator';



export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/trail" element={<Trial />} />
            <Route path="/login/signup" element={<Signup />} />
            <Route path="/trail/login" element={<Login />} />
            <Route path="/trail/purchase" element={<Billing />} />
            <Route path="/webstory" element={<WebStoryGenrator />} />
        </Routes>
      </Router>
    </div>
  )
}

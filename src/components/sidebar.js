import React,{useState} from 'react'
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import './sidenavbar.css';

export const Sidenavbar = () => {
    const [visibleLeft, setVisibleLeft] = useState(true);
  return (
    <div className='sidebar'>
      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <h3>Left Sidebar</h3>
        <ul>
          <li>hello</li>
          <li>hello</li>
        </ul>
      </Sidebar>
      <Button
        icon="pi pi-arrow-right"
        onClick={() => setVisibleLeft(true)}
        className="mr-2"
      />
    </div>
  )
}

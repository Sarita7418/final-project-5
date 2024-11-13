import React from 'react'; 
import './Alert.css'; 
import AlertIcon  from "@/public/AlertIcon.svg"; 

const Icon = () => { 
    return ( 
        <div className="icon">
        <img src={AlertIcon.src} alt="" />
      </div>
    ); 
}; 
export default Icon;
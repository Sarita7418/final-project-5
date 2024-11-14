import React from 'react'; 
import './Alert.css'; 
import AlertIcon  from "@/public/AlertIcon.svg"; 
import AnomIcon  from "@/public/AnomIcon.svg"; 
import ConsIcon  from "@/public/ConsIcon.svg"; 

interface IconProps { 
  type: 'alert' | 'anomaly' | 'consumption'; 
}
const Icon: React.FC<IconProps> = ({type}) => { 
  let iconSrc; 
  switch (type) { 
    case 'anomaly': 
      iconSrc = AnomIcon.src; 
      break; 
    case 'consumption': 
      iconSrc = ConsIcon.src; 
      break; 
    case 'alert': 
      default: iconSrc = AlertIcon.src; 
      break; 
  } 
  return ( 
    <div className="icon-container"> 
      <img src={iconSrc} alt={type} className="icon" /> 
    </div> 
  ); 
}; 
export default Icon;
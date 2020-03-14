import React from 'react';
import './service-preview.styles.scss';
import MiniService from "../mini-service/mini-service.component";
import services from "./service-list";

const ServicePreview = () => {
  return (
       <div className='service-preview-wrapper'>
           <h3>Процедуры</h3>
         <div className='service-preview'>
          {services.map(service=>(<MiniService {...service}/>))}
      </div>
       </div>
  )
};

export default ServicePreview;
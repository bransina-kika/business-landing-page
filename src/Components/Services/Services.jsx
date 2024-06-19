import React from 'react'
import './Services.css';
import common_license from '../../assets/common-license.jpg';
import manufacture_license from '../../assets/manufacture-license.jpg';
import service_license from '../../assets/service-license.jpg';
import common_icon from '../../assets/common-icon.png';
import manufacture_icon from '../../assets/manufacture-icon.png';
import service_icon from '../../assets/service-icon.png';

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={common_license} alt="Common License" />
            <div className="caption">
                <img src={common_icon} alt="" />
                <p>Common License</p>
            </div>
        </div>
        <div className="service">
            <img src={manufacture_license} alt="Manufactur License" />
            <div className="caption">
                <img src={manufacture_icon} alt="" />
                <p>Manufacture License</p>
            </div>
        </div>
        <div className="service">
            <img src={service_license} alt="Service License" />
            <div className="caption">
                <img src={service_icon} alt="" />
                <p>Service License</p>
            </div>
        </div>
    </div>
  )
}

export default Services
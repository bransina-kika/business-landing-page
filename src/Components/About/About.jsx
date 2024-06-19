import React from 'react'
import './About.css';
import about_img from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' />
        </div>
        <div className="about-right">
            <h3>ABOUT SHAMKRIS GLOBAL GROUP</h3>
            <h2>We are always Faster and Reliable</h2>
            <p>Shamkris Group was established in 2004 with a clear objective to help businesses with their regulatory and statutory compliance requirements. Over the years, the company has become a leading name in the industry by offering comprehensive compliance services to organizations of all sizes and types.</p>
        </div>
    </div>
  )
}

export default About
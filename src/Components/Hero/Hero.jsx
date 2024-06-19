import React from 'react';
import './Hero.css';
import white_arrow from '../../assets/white-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>

        <div className='hero-text'>
            <h1>Simplify Your Compliance Needs with Shamkris Global Group</h1>
            <p>Compliance made easy - from basic establishment regulatory licenses to complex regulatory requirements.</p>
            <button className='btn'>Expore More <img src={white_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
import React, { useRef } from 'react'
import './Testimonials.css'
import next_button from '../../assets/next-icon.png';
import back_button from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackword = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_button} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_button} alt="" className='back-btn' onClick={slideBackword}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Working with Shamkris Group has been an exceptional experience. They truly understand our business needs and consistently deliver outstanding results. Their professionalism, expertise, and commitment to excellence are unparalleled.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Indian Railways</h3>
                                <span>Mumbai, INDIA</span>
                            </div>
                        </div>
                        <p>We have been relying on Shamkris Group for several years now, and they continue to exceed our expectations. Their team goes above and beyond to provide us with tailored solutions that have significantly impacted our business growth.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Siemens</h3>
                                <span>Goa, INDIA</span>
                            </div>
                        </div>
                        <p>The level of service and support we receive from Shamkris Group is exceptional. Their attention to detail, prompt communication, and ability to navigate complex regulations have been instrumental in ensuring our compliance and success.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Dr. Batra's</h3>
                                <span>London, UK</span>
                            </div>
                        </div>
                        <p>Working with Shamkris Group has been an exceptional experience. They truly understand our business needs and consistently deliver outstanding results. Their professionalism, expertise, and commitment to excellence are unparalleled.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
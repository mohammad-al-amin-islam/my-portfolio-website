import React from 'react';
import Typed from "react-typed"
import img from '../../images/img.jpg'
import CV from '../../assests/Resume_Md. Al Amin Islam.pdf'
const Banner = () => {
    return (
        <div id='home'>
            <div class="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div>
                        <h1 class="mb-5 text-4xl lg:text-6xl font-bold text-white">Hello there</h1>
                        <h1 class="mb-5 text-6xl font-bold text-white">My Self Md. Al Amin Islam</h1>
                        <Typed className='text-3xl text-white'
                            strings={[
                                "I'm a Full Stack Developer",
                                "I Love Software Development",
                            ]}
                            typeSpeed={100}
                            backSpeed={50}
                            loop
                        />
                        <div className='mt-5 text-white'>
                            <a href={CV} download className="btn text-white bg-gradient-to-r from-primary to-secondary mr-5" >Download Resume</a>
                            <a href='/' className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500" >Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
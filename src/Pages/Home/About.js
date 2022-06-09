import React from 'react';
import alamin from '../../images/alamin-bg.png'
const About = () => {
    return (
        <div id='about' >
            <h1 className='text-center mt-10 text-5xl font-bold text-green-900'>About Me</h1>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={alamin} alt='alamin' class="max-w-sm lg:max-w-lg rounded-lg  bg-white p-5shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold text-amber-800">I'm Md. Al Amin Islam</h1>
                        <p class="py-6 text-3xl text-amber-800">Front End Developer</p>
                        <p class="py-6">To enhance my qualities with the opportunities at hand and build up my experiences further in order to pursue
                            strong engineering and technological skills as a successful Computer Engineer with focused work ethics, an
                            ability to increase my knowledge and contribute to significant software development.</p>
                        <button class="btn btn-primary">Hire me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
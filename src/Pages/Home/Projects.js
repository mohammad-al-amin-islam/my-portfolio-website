import React from 'react';
import img1 from '../../images/Tools-Artisan.png'
import img2 from '../../images/Cars-House-BD.png'
import img3 from '../../images/Consultant-Point.png'
import img4 from '../../images/projects.jpg'
const Projects = () => {
    return (
        <div id='projects'>
            <div className='pt-10'>
                <h1 className='text-center mt-10 text-5xl text-emerald-800'>My Projects</h1>
                <div className='border w-60 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>

            <div className='p-10' >
                {/* style={{ backgroundImage: `url(${img4})`,backgroundPosition:'bottom',backgroundSize:'cover'}} */}
                <div className=' mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3' >
                    <div className="card w-96 glass">
                        <figure><img src={img1} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Tools Artisan</h2>
                            <p>A website for manufucturer</p>
                            <p>For details click the button</p>
                            <div className="card-actions justify-end">
                                <button className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500">Click Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 glass">
                        <figure><img src={img2} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Cars House BD</h2>
                            <p>An inventory management website</p>
                            <p>For details click the button</p>
                            <div className="card-actions justify-end">
                                <button className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500">Click Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 glass">
                        <figure><img src={img3} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Tools Artisan</h2>
                            <p>A single service provding website</p>
                            <p>For details click the button</p>
                            <div className="card-actions justify-end">
                                <button className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500">Click Here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
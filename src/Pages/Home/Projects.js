import React, { useState } from 'react';
import img1 from '../../images/Tools-Artisan.png'
import img2 from '../../images/Cars-House-BD.png'
import img3 from '../../images/Consultant-Point.png'
import { useNavigate } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import ProjectDetails2 from './ProjectDetails2';
import ProjectDetails3 from './ProjectDetails3';

const Projects = () => {
    // const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [id2, setId2] = useState(null);
    const [id3, setId3] = useState(null);
    const handleButton1 = id => {
        setId(1);
    }
    const handleButton2 = id => {
        setId2(2);
    }
    const handleButton3 = id => {
        setId3(2);
    }
    return (
        <div id='projects'>
            <div className='pt-10'>
                <h1 className='text-center mt-10 text-5xl text-emerald-800'>My Projects</h1>
                <div className='border w-60 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>

            <div className='p-10' >
                {/* style={{ backgroundImage: `url(${img4})`,backgroundPosition:'bottom',backgroundSize:'cover'}} */}
                <div className=' mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                    <div className="card w-80 lg:w-96 glass">
                        <figure><img src={img1} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Tools Artisan</h2>
                            <p>A website for manufucturer</p>
                            <p>For details click details button</p>
                            <div className="card-actions justify-end">
                                <label for="my-modal-5" class="btn modal-button" className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500" onClick={() => handleButton1(1)}>Details</label>
                            </div>
                        </div>
                    </div>

                    <div className="card w-80 lg:w-96 glass">
                        <figure><img src={img2} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Cars House BD</h2>
                            <p>An inventory management website</p>
                            <p>For details click the button</p>
                            <div className="card-actions justify-end">

                                <label for="my-modal-6" class="btn modal-button" className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500" onClick={() => handleButton2(2)}>Details</label>

                            </div>
                        </div>
                    </div>

                    <div className="card w-80 lg:w-96 glass">
                        <figure><img src={img3} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Consultant Point</h2>
                            <p>A single service provding website</p>
                            <p>For details click the button</p>
                            <div className="card-actions justify-end">

                                <label for="my-modal-7" class="btn modal-button" className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500" onClick={() => handleButton3(3)}>Details</label>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                id && <ProjectDetails
                    id={id}
                ></ProjectDetails>
            }
            {
                id2 && <ProjectDetails2
                    id2={id2}
                ></ProjectDetails2>
            }
            {
                id3 && <ProjectDetails3
                    id3={id3}
                ></ProjectDetails3>
            }
        </div>
    );
};

export default Projects;
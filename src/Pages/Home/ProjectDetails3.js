import React from 'react';
import img1 from '../../images/projects3/Consultant-Point1.png'
import img2 from '../../images/projects3/Consultant-Point2.png'
import img3 from '../../images/projects3/Consultant-Point3.png'

const ProjectDetails3 = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-7" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl text-center">
                    <h3 class="font-bold text-lg mb-2">Consultant Point Details</h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        <div class="card w-60 bg-base-100 shadow-xl">
                            <figure><img src={img1} alt="Shoes" /></figure>
                        </div>
                        <div class="card w-60 bg-base-100 shadow-xl">
                            <figure><img src={img2} alt="Shoes" /></figure>
                        </div>
                        <div class="card w-60 bg-base-100 shadow-xl">
                            <figure><img src={img3} alt="Shoes" /></figure>
                        </div>

                    </div>
                    <div className='my-5'>
                        
                        <p className='text-justify'>In home pages there is a navbar,banner,services,faq part
                            In Login Form you can login if you have account .If have no account you can use register button for creating account .There is also reset password option if any one forget password. You can not go to checkout page with out login. In blogs pages there is some question answer.In about routes there is images and some description</p>

                        <p className='text-justify'> <span className='font-bold'>Technologies Used:</span> React JS,React Router,React Bootstarp,Firebase,React Router,React Toastify</p>
                        <a className="btn text-white mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 mr-3" href='https://github.com/mohammad-al-amin-islam/consultant-point' target='_blank' rel='noreferrer'>GitHub Link</a>
                        <a className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500" href='https://consultant-point.web.app/' target='_blank' rel='noreferrer'>Live Site</a>
                    </div>

                    <div class="modal-action">
                        <label for="my-modal-7" class="btn">CLose</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectDetails3;
import React from 'react';
import img1 from '../../images/projects1/Tools-Artisan1.png'
import img2 from '../../images/projects1/Tools-Artisan2.png'
import img3 from '../../images/projects1/Tools-Artisan3.png'

const ProjectDetails = ({ id }) => {

    return (
        <div>
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl text-center">
                    <h3 class="font-bold text-lg">Tools Artisan Details</h3>

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
                    <div className='mt-3'>
                        <h1>There are two sides to this website that is as a user and as an admin</h1>
                        <p className='text-justify'>If anybody login in as a user they can order a tool, and pay using the card.Before payment order can cancel from the dashboard and also can give a reviewAnd as an admin, there is an option that he/she can make any user become an admin.Admin can add a new product and also remove it.And if payments are completed from user admin can be shipped those orders.Also can remove those orders that are not paid yet.Blogs routes have some questions and answers.My portfolio will be about myself.</p>
                        
                        <p className='text-justify'> <span className='font-bold'>Used Technologies:</span> HTML , Tailwind CSS, React.JS, Hero Icon, React Router, Firebase, Node JS, Express JS, MongoDB, Heroku, React toastifys</p>
                        <a className="btn text-white mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 mr-3" href='https://github.com/mohammad-al-amin-islam/tools-artisan-client-side' target='_blank' rel='noreferrer'>GitHub Link</a>
                        <a className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500" href='https://tools-artisan.web.app/' target='_blank' rel='noreferrer'>Live Site</a>
                    </div>

                    <div class="modal-action">
                        <label for="my-modal-5" class="btn">CLose</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectDetails;
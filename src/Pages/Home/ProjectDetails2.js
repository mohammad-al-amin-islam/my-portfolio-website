import React from 'react';
import img1 from '../../images/projects2/Cars-House-BD1.png'
import img2 from '../../images/projects2/Cars-House-BD2.png'
import img3 from '../../images/projects2/Cars-House-BD4.png'

const ProjectDetails2 = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl text-center">
                    <h3 class="font-bold text-lg mb-2">Cars House BD Details</h3>

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
                    <div className='my-10'>
                      
                        <p className='text-justify'>In-home pages there is some section header, banner, inventories two extra sections, and a footer.To see inventories you must log in, if you have no account you can also register.In managing inventories you can see all of the data also you can delete it from here.Using add items routes users can add new inventory items.And in my items pages, users can see the items he/she added.And in blogs there is some question answer and in about there is a short description about me.</p>
                        <p className='text-justify'><span className='font-bold'>Technologies Used:</span> HTML,CSS,React Bootstarp,Google Font,React.Js,NodeJs,ExpressJs,MongoDB,Firebase,React Router,React Toastify</p>
                        <a className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 mt-5 mr-3" href='https://github.com/mohammad-al-amin-islam/cars-house-bd-client-side' target='_blank' rel='noreferrer'>GitHub Link</a>
                        <a className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500" href='https://cars-house-bd.web.app/' target='_blank' rel='noreferrer'>Live Site</a>
                    </div>

                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">CLose</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectDetails2;
import React from 'react';
import img4 from '../../images/projects.jpg'
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify';
const Contact = () => {
    const handleFromSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        console.log(email, name, message);

        emailjs.sendForm('service_5nibvo1', 'template_cv4phlh', event.target, 'MpyQUKFe2gVnzsr-K').then((result) => {
           toast('Successfully sends the message');
           event.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div id='contact' className='mb-10'>
            <div className='pt-10'>
                <h1 className='text-center mt-10 text-5xl text-emerald-800'>Contact with me</h1>
                <div className='border w-72 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>
            <div className='flex justify-center m-5'>
                <div style={{ backgroundImage: `url(${img4})`, backgroundPosition: 'bottom', backgroundSize: 'cover' }} className="card w-full lg:w-2/3 shadow-2xl bg-base-100">
                    <form onSubmit={handleFromSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Message</span>
                                </label>
                                <textarea type="text" name='message' placeholder="Your Message" className="input input-bordered h-56" required />
                            </div>
                            <div className="form-control mt-6 w-1/2 mx-auto">
                                <button className="btn text-white bg-gradient-to-r from-secondary to-blue-500">Send</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
               
            </div>
            
        </div>
    );
};

export default Contact;
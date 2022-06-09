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
            <div className='flex justify-center mt-9'>
                <div style={{ backgroundImage: `url(${img4})`, backgroundPosition: 'bottom', backgroundSize: 'cover' }} class="card w-full lg:w-2/3 shadow-2xl bg-base-100 ">
                    <form onSubmit={handleFromSubmit}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Message</span>
                                </label>
                                <textarea type="text" name='message' placeholder="Your Message" class="input input-bordered h-56" required />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
               
            </div>
            
        </div>
    );
};

export default Contact;
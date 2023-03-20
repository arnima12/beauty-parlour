import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';

const Contact = () => {

    return (
        <div className="bg-red-200 mt-20 py-8">
            <h2 className="text-center text-xl font-semibold text-red-400">Contact Us</h2>
            <h3 className="text-center text-3xl text-black">Stay connected with us</h3>
            <form className="flex flex-col gap-6 items-center mt-8">
                <input type="text" placeholder="Email" className="input w-72 lg:w-96" />
                <input type="text" placeholder="Subject" className="input w-72 lg:w-96" />
                <textarea className="textarea w-72 lg:w-96 h-56" placeholder="Your Messages"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default Contact;
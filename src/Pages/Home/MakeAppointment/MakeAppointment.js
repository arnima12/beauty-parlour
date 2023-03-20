import React from 'react';
import artist from "../../../asset/artist-removebg-preview.png";
import PrimaryButton from '../../../components/PrimaryButton';
const MakeAppointment = () => {
  return (
    <section className="mt-32 bg-red-200">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={artist} className="hidden rounded-lg -mt-32 h-[500px] lg:w-1/2 lg:block" alt="artist" />
          <div className="p-20">
            <h2 className="text-md text-red-500 font-bold">APPOINTMENT</h2>
            <h1 className="text-2xl font-bold text-red-400">MAKE AN APPOINTMENT TODAY</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Book Now</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
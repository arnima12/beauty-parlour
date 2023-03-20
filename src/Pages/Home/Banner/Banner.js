import React from 'react';
import hero from "../../../asset/hero.jpg";
import background from "../../../asset/back1.jpg";
import PrimaryButton from '../../../components/PrimaryButton';

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hero} className="lg:w-1/2 rounded-full shadow-2xl" alt="hero" />
        <div>
          <h1 className="text-5xl md:text-8xl font-bold text-red-400">It's your time to shine</h1>
          <p className="py-6 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <PrimaryButton>Book Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
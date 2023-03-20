import React from 'react';
import care from "../../../asset/care.jpg";
import PrimaryButton from '../../../components/PrimaryButton';

const Care = () => {
  return (
    <div className="my-20 px-10">
      <div className="card lg:card-side grid lg:grid-cols-2 bg-base-100 shadow-xl ">
        <figure><img className="h-[550px] rounded-lg" src={care} alt="care" /></figure>
        <div className="flex flex-col gap-10 justify-center">
          <h2 className="font-semibold text-center text-3xl md:text-5xl mt-12">Exceptional Beauty<br /> Care, on Your Terms</h2>
          <p className="text-center text-xl">Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-center mb-8">
            <PrimaryButton>Book Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
import React from 'react';

const Review = ({ review }) => {
  const { name, image, description, country } = review;
  return (
    <section>
      <div className="card bg-base-100 shadow-2xl py-4">
        <div className="card-body">
          <p>{description}</p>
          <div className="flex gap-8 mt-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt="people" />
              </div>
            </div>
            <div className="flex flex-col justify-center font-semibold">
              <h2 >{name}</h2>
              <h3>{country}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
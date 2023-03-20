import React from 'react';

const Service = ({ service }) => {
  const { name, description, icon } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img className="w-full h-56" src={icon} alt="Services" /></figure>
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p>{description}</p>

      </div>
    </div>
  );
};

export default Service;
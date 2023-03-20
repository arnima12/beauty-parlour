import React from 'react';

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card md:card-side shadow-xl ${bgClass} flex flex-row px-8 py-4 text-black`}>
      <figure><img className="w-16" src={icon} alt="Parlour" /></figure>
      <div className="card-body">
        <h2 className="card-title ">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
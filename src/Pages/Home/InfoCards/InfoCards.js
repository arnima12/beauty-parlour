import React from 'react';
import clock from "../../../asset/icons/clock.svg";
import marker from "../../../asset/icons/marker.svg";
import phone from "../../../asset/icons/phone.svg";
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: ' Opening Hours',
            description: "Open 9:00 am to 5:00 pm everyday",
            icon: clock,
            bgClass: 'bg-gradient-to-r from-red-200 to-red-400'
        },
        {
            id: 2,
            name: ' Our Location',
            description: "Open 9:00 am to 5:00 pm everyday",
            icon: marker,
            bgClass: 'bg-gradient-to-r from-red-200 to-red-400'
        },
        {
            id: 3,
            name: ' Contact Us',
            description: "Open 9:00 am to 5:00 pm everyday",
            icon: phone,
            bgClass: 'bg-gradient-to-r from-red-200 to-red-400'
        },
    ]
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white font-bold mt-20">
            {cardData.map(card => <InfoCard key={card.id} card={card} />)}
        </div>
    );
};

export default InfoCards;
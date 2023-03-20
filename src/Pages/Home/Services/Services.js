import React from 'react';
import facial from "../../../asset/facial.png";
import makeup from "../../../asset/makeup.png";
import manicure from "../../../asset/manicure.png";
import Service from './Service';
const Services = () => {
    const services = [
        {
            id: 1,
            icon: facial,
            name: "Facial",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 2,
            icon: makeup,
            name: "Makeup",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 3,
            icon: manicure,
            name: "Manicure & Pedicure",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {services.map(service => <Service key={service.id} service={service} />)}
        </div>
    );
};

export default Services;
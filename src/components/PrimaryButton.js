import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn bg-gradient-to-r from-red-400 to-red-500 border-none font-semibold text-black">{children}</button>
    );
};

export default PrimaryButton;
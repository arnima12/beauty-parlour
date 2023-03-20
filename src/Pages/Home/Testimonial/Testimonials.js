import React from 'react';
import people1 from "../../../asset/review1.jpg"
import Review from './Review';
import quote from "../../../asset/quote.png"
const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      country: "Callifornia",
      image: people1
    },
    {
      id: 2,
      name: "Winson Herry",
      description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      country: "Callifornia",
      image: people1
    },
    {
      id: 3,
      name: "Winson Herry",
      description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      country: "Callifornia",
      image: people1
    }
  ]
  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <h2 className="font-semibold text-red-400 text-xl">Testimonial</h2>
          <h3 className="text-red-400 text-5xl">What Our Clients say!</h3>
        </div>
        <div>
          <img src={quote} alt="quote" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          reviews.map(review => <Review key={review.id} review={review} />)
        }
      </div>
    </div>
  );
};

export default Testimonial;
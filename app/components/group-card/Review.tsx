"use client";

import React from "react";
import { ImPriceTags } from "react-icons/im";
import { MdCheckCircle } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";

const MAX_RATING = 5;

type StarRatingProps = {
  rating: number;
};
// Dummy data array
const reviews = [
  {
    id: 1,
    imageUrl: "/foto-profil.png",
    rating: 2,
    name: "farhan dwian",
    description:
      "Bimbel csw merupakan salah satu bimbel online kedinasan dengan sistem pembelajaran terbaik yang pernah saya temui",
    title: "Platform Belajar Online Kedinasan Terbaik",
    date: "2023-11-01",
    dateTime: "2023-11-01T09:00",
  },
  {
    id: 2,
    imageUrl: "/foto-profil.png",
    rating: 4,
    name: "farhan dwian",
    description:
      "Bimbel csw merupakan salah satu bimbel online kedinasan dengan sistem pembelajaran terbaik yang pernah saya temui",
    title: "Platform Belajar Online Kedinasan Terbaik",
    date: "2023-11-01",
    dateTime: "2023-11-01T09:00",
  },
  {
    id: 3,
    imageUrl: "/foto-profil.png",
    rating: 4,
    name: "farhan dwian",
    description:
      "Bimbel csw merupakan salah satu bimbel online kedinasan dengan sistem pembelajaran terbaik yang pernah saya temui",
    title: "Platform Belajar Online Kedinasan Terbaik",
    date: "2023-11-01",
    dateTime: "2023-11-01T09:00",
  },
  // Add two more objects to the array for card 2 and card 3 with their respective details
  // ...
];

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Create an array with `MAX_RATING` elements, and check if each should be filled or empty
  const stars = Array.from({ length: MAX_RATING }, (_, index) => {
    const key = `star_${index}`;
    return index < rating ? (
      <FaStar key={key} className="text-yellow-500" />
    ) : (
      <FaRegStar key={key} className="text-yellow-500" />
    );
  });

  return <div className="flex">{stars}</div>;
};

const Review = () => {
  return (
    <>
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 py-6 px-4 gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="col-span-1 grid grid-cols-2 md:grid-cols-3 gap-2 bg-white text-black rounded-lg shadow-md p-4"
          >
            <div className="col-span-1 items-center pt-1">
              <img
                alt={`Gambar ${review.name}`}
                src={review.imageUrl}
                className="max-w-[80%] h-auto rounded-full border-4 border-purple-100 object-cover" // Correct the class name here
              />
            </div>
            <div className="col-span-2">
              <StarRating rating={review.rating} />
              <p className="text-base font-medium text-gray-900 mt-3">
                {review.title}
              </p>
              <p className="mt-1 text-sm text-gray-500 mt-3">
                {review.description}
              </p>
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-900">
                  {review.name}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={review.dateTime}>{review.date}</time>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Review;

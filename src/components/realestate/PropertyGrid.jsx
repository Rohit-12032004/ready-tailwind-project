import React from 'react';
import { motion } from 'framer-motion';
import { cardFadeUp, staggerContainer } from '../../animations';

const properties = [
  {
    id: 1,
    image: 'https://source.unsplash.com/400x300/?house',
    title: 'Modern Family Home',
    location: 'Mumbai, India',
    price: '₹1.2 Cr',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/400x300/?villa',
    title: 'Luxury Villa with Pool',
    location: 'Goa, India',
    price: '₹3.8 Cr',
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/400x300/?apartment',
    title: '2BHK Apartment in City Center',
    location: 'Bangalore, India',
    price: '₹80 L',
  },
];

const PropertyGrid = () => {
  return (
    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {properties.map((property) => (
        <motion.div
          key={property.id}
          variants={cardFadeUp}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        >
          <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{property.location}</p>
            <p className="mt-2 font-bold text-blue-600 dark:text-blue-400">{property.price}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PropertyGrid;

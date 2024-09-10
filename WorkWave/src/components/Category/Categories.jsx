// Categories.js
import React, { useState } from "react";

const Categories = ({ onCategoryChange }) => { // Add onCategoryChange as a prop
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "Programming & Tech",
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Video & Animation",
    "AI Services",
    "Music & Audio",
    "Business",
    "Consulting",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category); // Notify MarketPlace about the category change
  };

  return (
    <aside>
      <h3 className="text-3xl font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer flex items-center ${
              selectedCategory === category ? "text-orange-500 font-semibold" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {selectedCategory === category && (
              <span className="mr-2">➡️</span>
            )}
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Categories;

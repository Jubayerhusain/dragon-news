import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function LeftAside() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <div className="flex flex-col text-left space-y-2 mt-3">
        {categories.map((category) => (
          <NavLink
          to={`/category/${category.category_id}`}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white p-4 rounded-lg text-lg font-bold"
              : "bg-base-200 text-gray-500 p-4 rounded-lg text-lg font-bold hover:bg-base-300"
          }
          aria-label={`Go to ${category.category_name}`}
          key={category.category_id}
        >
          {category.category_name}
        </NavLink>
        
        ))}
      </div>
    </div>
  );
}

export default LeftAside;

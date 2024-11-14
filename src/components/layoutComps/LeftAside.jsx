import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data.news_category);
      });
  }, []);
  return (
    <div>
      <h2 className="font-semibold text-xl">All Category</h2>
      <div className="flex flex-col gap-3 my-6">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className="btn btn-ghost border border-gray-300 text-black text-lg font-semibold rounded-md"
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default LeftAside;

import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { id } = useParams();
  console.log(id);
  const { news } = props || {};
  console.log(news);

  return (
    <div className="bg-white rounded-md shadow-md my-4 border-2">
      {/* Author Information */}
      <div className="flex justify-between items-center mb-4 bg-gray-200 p-2">
        <div className="flex gap-2 items-center">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold">{news.author.name}</p>
            <p className="text-sm text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <FaBookmark></FaBookmark>
          <FaShareAlt />
        </div>
      </div>

      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{news.title}</h2>

        {/* Thumbnail Image */}
        <img
          src={news.image_url}
          alt="Thumbnail"
          className="w-full object-cover rounded-lg mb-4"
        />

        {/* Details */}
        <p className="text-gray-700 text-sm mb-4">
          {news.details.slice(0, 150)}...{" "}
          <span className="text-primary cursor-pointer">
            <Link to={`/category/${id}/details/${news._id}`}>Read More</Link>
          </span>
        </p>

        <div className="divider"></div>
        {/* Ratings and Views */}
        <div className="flex items-center justify-between text-gray-600 text-sm">
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`text-yellow-400 ${
                  i < Math.round(news.rating.number) ? "" : "opacity-50"
                }`}
              />
            ))}
            <span className="ml-2 font-semibold">{news.rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center">
            <FaRegEye className="mr-1" />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;

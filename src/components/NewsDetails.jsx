import { Link } from "react-router-dom";

const NewsDetails = ({ singleNews: news }) => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Dragon News</h2>
      <div className="mx-auto bg-white rounded-lg shadow-md border-2 my-6 space-y-5">
        <div className="p-4">
          <img
            className="object-contain h-[500px] w-full rounded-lg mb-4"
            src={news.thumbnail_url}
            alt="News Thumbnail"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{news.title}</h2>
          <div className="text-gray-600 text-xs mb-2">
            <span>{new Date(news.author.published_date).toDateString()}</span>
            <span> | </span>
            <span>{news.author.name}</span>
          </div>
          <p className="text-gray-700 text-sm mb-4">{news.details}</p>
          <Link to="/category/08">
            <button className="bg-red-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-red-700">
              All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;

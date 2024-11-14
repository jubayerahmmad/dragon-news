import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const MainContent = () => {
  const { data: newses } = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold text-xl">Dragon News Home</h2>
      <h2 className="font-semibold text-gray-400">
        {newses.length} News Found in This Category
      </h2>
      <div className="p-4">
        {newses.map((news, i) => (
          <NewsCard key={i} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default MainContent;

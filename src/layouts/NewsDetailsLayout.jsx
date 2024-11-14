import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightAside from "../components/layoutComps/RightAside";
import NewsDetails from "../components/NewsDetails";

const NewsDetailsLayout = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div className="font-poppins w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid lg:grid-cols-12 my-12 gap-6">
        <section className="lg:col-span-9">
          <div>
            {news.map((singleNews) => (
              <NewsDetails
                key={singleNews._id}
                singleNews={singleNews}
              ></NewsDetails>
            ))}
          </div>
        </section>
        <aside className="lg:col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetailsLayout;

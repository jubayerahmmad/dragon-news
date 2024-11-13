import Header from "../components/Header";
import LatestMarquee from "../components/LatestMarquee";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestMarquee></LatestMarquee>
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;

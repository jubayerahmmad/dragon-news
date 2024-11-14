import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestMarquee from "../components/LatestMarquee";
import LeftAside from "../components/layoutComps/LeftAside";
import RightAside from "../components/layoutComps/RightAside";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins w-11/12 mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestMarquee></LatestMarquee>
        </section>
      </header>
      <nav className="my-8">
        <Navbar></Navbar>
      </nav>
      <main className="grid lg:grid-cols-12 my-12">
        <aside className="lg:col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="lg:col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="lg:col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

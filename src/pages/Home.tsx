import { Navbar } from "../components";
import { About, Article, Header, Schedule, Statistic } from "../sections";

const Home = () => {
  return (
    <div className="mt-20">
      <Navbar />
      <Header />
      <About />
      <Schedule />
      <Article />
      <Statistic />
    </div>
  );
};

export default Home;

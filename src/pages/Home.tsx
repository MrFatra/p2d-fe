import { Navbar } from "../components";
import { About, Article, Header, Schedule } from "../sections";

const Home = () => {
  return (
    <div className="mt-20">
      <Navbar />
      <Header />
      <About />
      <Schedule />
      <Article />
    </div>
  );
};

export default Home;

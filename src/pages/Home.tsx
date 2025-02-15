import { Navbar } from "../components";
import { About, Article, FAQ, Footer, Header, Schedule, Statistic } from "../sections";

const Home = () => {
  return (
    <div className="mt-20">
      <Navbar />
      <Header />
      <About />
      <Schedule />
      <Article />
      <Statistic />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;

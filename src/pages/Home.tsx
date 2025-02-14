import { Navbar } from "../components";
import { About, Header, Schedule } from "../sections";

const Home = () => {
  return (
    <div className="mt-20">
      <Navbar />
      <Header />
      <About />
      <Schedule />
    </div>
  );
};

export default Home;

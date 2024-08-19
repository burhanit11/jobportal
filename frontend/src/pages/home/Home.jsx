import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/heroSection/HeroSection";
import CategoryCarousel from "../../components/categoryCarousel/CategoryCarousel";
import LateastJobs from "../../components/lateastJobs/LateastJobs";
import useGetAllJobs from "../../utils/useGetAllJobs";

const Home = () => {
  useGetAllJobs();
  return (
    <div>
      <Header />
      <HeroSection />
      <CategoryCarousel />
      <LateastJobs />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

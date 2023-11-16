import "./App.css";
import DestinationCard from "./components/cards/DestinationCard";
import Banner from "./components/home_component/Banner";
import BrowseCategory from "./components/home_component/BrowseCategory";
import TopDestinations from "./components/home_component/TopDestinations";
import WhyChoose from "./components/home_component/WhyChoose";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <BrowseCategory />
      <WhyChoose />
      <TopDestinations />
      <DestinationCard />
    </>
  );
}

export default App;

import "./App.css";
import Banner from "./components/home_component/Banner";
import BrowseCategory from "./components/home_component/BrowseCategory";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <BrowseCategory />
    </>
  );
}

export default App;

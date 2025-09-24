import Banner from "./components/Home/Banner";
import Features from "./components/Home/Features";
import Navbar from "./components/Home/Navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
      </header>
    </div>
  );
}

import Banner from "./components/Home/Banner";
import FAQ from "./components/Home/FAQ";
import Features from "./components/Home/Features";
import Navbar from "./components/Home/Navbar";
import Reviews from "./components/Home/Reviews/Reviews";
import UserFocusedFeatures from "./components/Home/UserFocusedFeatures/UserFocusedFeatures";

export default function Home() {
  return (
    <div>
      <header className="lg:px-4 xl:px-0 max-w-11/12 lg:max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
      </header>
      <main className="lg:px-4 xl:px-0 max-w-11/12 lg:max-w-7xl mx-auto">
        <UserFocusedFeatures></UserFocusedFeatures>
        <Reviews></Reviews>
        <FAQ></FAQ>
      </main>
    </div>
  );
}

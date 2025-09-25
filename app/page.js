import Banner from "./components/Home/Banner";
import Features from "./components/Home/Features";
import Navbar from "./components/Home/Navbar";
import UserFocusedFeatures from "./components/Home/UserFocusedFeatures/UserFocusedFeatures";

export default function Home() {
  return (
    <div>
      <header className="lg:px-4 xl:px-0">
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
      </header>
      <main className="lg:px-4 xl:px-0">
        <UserFocusedFeatures></UserFocusedFeatures>
      </main>
    </div>
  );
}

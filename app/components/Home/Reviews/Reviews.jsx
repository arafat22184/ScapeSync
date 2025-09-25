"use client";

import { useEffect, useState } from "react";
import Review from "./Review";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Reviews() {
  const reviews = [
    {
      name: "Alex W.",
      image:
        "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749445/Alex_ydlu2y.png",
      designation: "Owner, CleanPro Services",
      message:
        "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    },
    {
      name: "Ahmed R.",
      image:
        "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749445/Ahmed_i3yuju.png",
      designation: "Technician",
      message:
        "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    },
    {
      name: "Farzana H.",
      image:
        "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749444/Farzana_yougsw.png",
      designation: "Rafiq M., Homeowner",
      message:
        "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    },
    {
      name: "Anny M.",
      image:
        "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758771392/anny_pnzzlv.jpg",
      designation: "Owner, QuickClean Services",
      message:
        "The app makes team management so much easier. I can assign jobs in seconds and track progress instantly.",
    },
    {
      name: "Marry W.",
      image:
        "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758771391/mary_yucgps.jpg",
      designation: "Employee, HomeFix Solutions",
      message:
        "I enjoy using the app every day. It keeps me organized and makes communication with clients effortless.",
    },
    {
      name: "Luis J.",
      image:
        "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758771391/luis_ap2rbn.jpg",
      designation: "Client, SparkClean",
      message:
        "Booking services has never been easier. I love how I can see the status of my appointments in real time.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // lg: 3 slides
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // md: 2 slides
      } else {
        setSlidesToShow(1); // mobile: 1 slide
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedReviews = [...reviews, ...reviews, ...reviews];

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= reviews.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  // Manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Calculate slide width based on slides to show
  const slideWidth = 100 / slidesToShow;

  return (
    <section className="mb-42.5">
      <h1 className="text-[#212B36] font-bold text-5xl text-center">
        What Our Users Are Saying
      </h1>
      <p className="text-[#637381] text-sm text-center mt-2.5 mb-15">
        Real stories from clients, employees, and business owners who use
        <br className="hidden lg:block" />
        our app every day.
      </p>

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`,
          }}
        >
          {extendedReviews.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2.5"
              style={{ width: `${slideWidth}%` }}
            >
              <Review review={review} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-300/60 hover:bg-green-300 cursor-pointer p-2 rounded-full shadow-lg z-10 transition-all duration-200"
          aria-label="Previous reviews"
        >
          <IoIosArrowBack />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-300/60 hover:bg-green-300 cursor-pointer p-2 rounded-full shadow-lg z-10 transition-all duration-200"
          aria-label="Next reviews"
        >
          <IoIosArrowForward />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-[#212B36]" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

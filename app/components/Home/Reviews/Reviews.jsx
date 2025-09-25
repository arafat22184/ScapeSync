import Review from "./Review";

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
  ];
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <Review key={i} review={review}></Review>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import CourseDetails from "./_components/CourseDetails";
import FAQSection from "../_components/FaqSection";
import InstructorProfile from "./_components/InstructorProfile";
import { Metadata } from "next";

const faqData = [
  {
    question: "What if I don't have enough money to trade?",
    answer:
      "We offer funded trading accounts to traders who demonstrate exceptional and consistent performance. This provides an opportunity to become a professional trader on our team, managing significant capital.",
  },
  {
    question: "What if I lack a professional trading setup and tools?",
    answer:
      "We provide all the necessary tools and resources you need to succeed. Our platform includes professional-grade charting software, real-time market data, risk management tools, and access to premium trading indicators. You'll have everything required for professional trading.",
  },
  {
    question: "How long do I have access to the course materials?",
    answer:
      "You'll have lifetime access to all course materials, including any future updates and additional content we add. This ensures you can revisit the materials whenever needed and stay updated with new strategies and market conditions.",
  },
  {
    question: "Will I be able to network with other traders?",
    answer:
      "Absolutely! You'll join our exclusive trading community where you can connect with fellow traders, share insights, discuss strategies, and learn from each other's experiences. We also host regular webinars and networking events.",
  },
  {
    question: "Is profitability guaranteed after completing the course?",
    answer:
      "While we cannot guarantee profits (as trading involves inherent risks), our comprehensive program significantly improves your chances of success. We provide proven strategies, risk management techniques, and ongoing support to help you develop into a consistently profitable trader.",
  },
  {
    question: "Will I be able to get a job after the program?",
    answer:
      "Our program prepares you for various career opportunities in trading and finance. Top performers may be considered for positions within our trading firm, and we provide career guidance and networking opportunities to help you pursue roles at other financial institutions.",
  },
  {
    question: "Do I need to monitor financial news all day?",
    answer:
      "Our program prepares you for various career opportunities in trading and finance. Top performers may be considered for positions within our trading firm, and we provide career guidance and networking opportunities to help you pursue roles at other financial institutions.",
  },
];
export const dynamic = "force-dynamic";
export const revalidate = 60;

export const metadata: Metadata = {
  alternates: {
    canonical: "/courses",
  },
};

// const getCoursePage = async (): Promise<THomeData> => {
//   return await frontendApi.getCourseTestimonials();
// };
const page = async () => {
  // const response = await getCoursePage();
  return (
    <div className="max-w-[1440px] mx-auto">
      <HeroSection />
      <FeaturesSection />
      <CourseDetails />
      <InstructorProfile />
      {/* <Testimonials testimonials={response?.testimonials} /> */}
      <FAQSection
        textColor="text-white"
        faqData={faqData}
        title="Got Questions?"
        span="We've Got Answers"
        description="Helping you understand things better"
      />
    </div>
  );
};

export default page;

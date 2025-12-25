import React from "react";
import Herosection from "./_components/HeroSection";
import Experience from "./_components/Experience";
import VideoSection from "./_components/VideoSection";
import CourseSection from "./_components/CourseSection";
import FAQSection from "./_components/FaqSection";
import TradingAcademySection from "./_components/TradingAcademySection";
import { Metadata } from "next";
import { frontendApi } from "@/api/api";
import { THomeData } from "@/api/type";
import Testimonials from "./_components/TestimonialSection";

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
];
export const dynamic = "force-dynamic";
export const revalidate = 60;

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const getHomePage = async (): Promise<THomeData> => {
  return await frontendApi.getHomeTestimonials();
};
const page = async () => {
  const response = await getHomePage();
  return (
    <div>
<div className="relative bg-black overflow-hidden">
  <Herosection />

  <div className="relative  max-w-[1440px] mx-auto">
    <div className="pointer-events-none absolute ~top-[-10rem]/[-12.5rem] left-1/2 -translate-x-1/2 z-0">
      <div
        className="
          w-[85vw]
          max-w-[1100px]
          h-[520px]
    rounded-lg
   bg-gradient-radial from-[#ECB76A]/40 to-transparent
          blur-2xl
        "
      />
    </div>

    <div className="relative z-10">
      <Experience />
    </div>
  </div>
</div>

      <div className="max-w-[1440px] mx-auto">
        <VideoSection />
      </div>
      <div className="max-w-[1440px] mx-auto">
        {" "}
        <CourseSection />
      </div>
      <div className="max-w-[1440px] mx-auto">
        <TradingAcademySection />
      </div>{" "}
      <Testimonials testimonials={response?.testimonials} />
      <div className="max-w-[1440px] mx-auto">
        <FAQSection
          textColor="text-[#8F8F8F]"
          faqData={faqData}
          title="Frequently Asked "
          span="Questions"
          description=" Everything you need to know before stepping into the markets with Horus."
        />
      </div>
    </div>
  );
};

export default page;

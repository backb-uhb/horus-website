import React from "react";
import TopSection from "./_components/TopSection";
import FounderSection from "./_components/FounderSection";
import MembersSection from "./_components/MembersSection";
import BrandsSection from "./_components/BrandsSection";
import DisclaimerSection from "./_components/DisclaimerSection";
import InsideSection from "./_components/InsideHorusSection";

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <TopSection />
      <FounderSection />
      <MembersSection />
      <BrandsSection />
      <DisclaimerSection />
      <InsideSection />
    </div>
  );
};

export default page;

import React from "react";
import TopSection from "./_components/TopSection";
import FounderSection from "./_components/FounderSection";
import MembersSection from "./_components/MembersSection";
import DisclaimerSection from "./_components/DisclaimerSection";
import InsideSection from "./_components/InsideHorusSection";

const page = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <TopSection />
        <FounderSection />
      </div>
      <MembersSection />
      {/* <BrandsSection /> */}
      <div className="max-w-[1440px] mx-auto">
        <DisclaimerSection />
        <InsideSection />
      </div>
    </div>
  );
};

export default page;

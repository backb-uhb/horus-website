import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-white ~pt-[8rem]/[17rem] ~px-[0.625rem]/[6.25rem]">
      <div className="font-merriweather text-[#F7F8F8] ~pb-[3rem]/[6rem] ~text-[1.375rem]/[3.25rem] text-center leading-[110%] tracking-[-0.07rem] font-normal md:font-bold ">
        <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
          Terms And Conditions
        </span>{" "}
      </div>

      <div className="font-normal ~text-[0.75rem]/[1.5rem] font-satoshi ~space-y-[1rem]/[1.5rem]  leading-[120%] text-white ~tracking-[-0.004375rem]/[-0.015rem]">
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          {" "}
          1. Introduction
        </h2>{" "}
        <p>
          {" "}
          Welcome to Horus Financial Academy. By accessing or using our website,
          services, or programs, you agree to the following Terms & Conditions.
          Please read them carefully.{" "}
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          2. Use of Services
        </h2>
        <p>
          Our courses, resources, and materials are for educational purposes
          only. You agree not to misuse our content, reproduce it without
          permission, or engage in activities that may harm our platform or
          reputation.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          3. Registration & Accounts
        </h2>
        <p>
          You must provide accurate details when registering. You are
          responsible for keeping your login credentials secure.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          4. Payments
        </h2>
        <p>
          All fees must be paid in full before course access is granted. Prices
          are subject to change without prior notice, but confirmed bookings
          remain valid.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          5. Refund & Cancellation Policy
        </h2>
        <p>
          Fees once paid are non-refundable, except in special cases at our sole
          discretion. Course enrollment is non-transferable. If Horus Financial
          Academy cancels a class or program, participants will be offered a
          refund or credit option.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          6. Intellectual Property
        </h2>
        <p>
          All course materials, content, videos, and resources are owned by
          Horus Financial Academy. Unauthorized reproduction, distribution, or
          sharing is strictly prohibited.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          7. Disclaimer
        </h2>
        <p>
          Our programs are educational only and do not guarantee profits, job
          placements, or business outcomes. Horus Financial Academy is not
          responsible for financial, personal, or professional losses arising
          from the use of our services.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          8. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, Horus Financial Academy shall
          not be liable for indirect, incidental, or consequential damages.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          9. Governing Law
        </h2>
        <p>
          These Terms & Conditions are governed by the laws of India. Any
          disputes shall be resolved under the jurisdiction of courts in
          Bengaluru, India.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          10. Contact Us
        </h2>
        <p>
          For any queries, please reach us at: Email:{" "}
          <Link
            href="mailto:mail@horusfinancialacademy.com"
            className=" hover:text-[#FFD38D] underline underline-offset-2 decoration-1"
          >
            mail@horusfinancialacademy.com
          </Link>
          &nbsp; Phone:{" "}
          <Link
            href="tel:+919534888818"
            className=" hover:text-[#FFD38D] whitespace-nowrap underline underline-offset-2 decoration-1"
          >
            +91 95348 88818
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;

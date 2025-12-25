import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-white ~pt-[8rem]/[17rem] ~px-[0.625rem]/[6.25rem]">
      <div className="font-merriweather text-[#F7F8F8] ~pb-[3rem]/[6rem] ~text-[1.375rem]/[3.25rem] text-center leading-[110%] tracking-[-0.07rem] font-normal md:font-bold ">
        <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
Privacy Policy
        </span>{" "}
      </div>

      <div className="font-normal ~text-[0.75rem]/[1.5rem] font-satoshi ~space-y-[1rem]/[1.5rem]  leading-[120%] text-white ~tracking-[-0.004375rem]/[-0.015rem]">
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          {" "}
          1. Information Collection
        </h2>{" "}
        <p>
          {" "}
We respect your privacy and do not collect personal information unless you choose to contact us. Any information shared with us is used only to respond to your queries and provide relevant information about our services.{" "}
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          2. Use of Information
        </h2>
        <p>
          Information, if received, is used solely for communication purposes and to improve our website and services. We do not use personal data for unsolicited marketing.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          3. Data Protection
        </h2>
        <p>
          We take reasonable measures to protect any information shared with us. However, no method of online transmission or storage is completely secure.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          4. Sharing of Information
        </h2>
        <p>
         We do not sell, rent, or share personal information with third parties, except when required by law or legal authorities.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          5. Cookies
        </h2>
        <p>
         Our website may use cookies or basic analytics tools to improve user experience. You can disable cookies in your browser settings if you prefer.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          6. Educational Disclaimer
        </h2>
        <p>
         All content on this website is for educational purposes only. We do not provide investment advice or guarantee profits. Trading in financial markets involves risk.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          7. Policy Updates
        </h2>
        <p>
         This Privacy Policy may be updated from time to time. Continued use of our website means you accept the revised policy.
        </p>
        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          8. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, Horus Financial Academy shall
          not be liable for indirect, incidental, or consequential damages.
        </p>

        <h2 className=" text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          9. Contact Us
        </h2>
        <p>
          If you have any questions regarding this Privacy Policy, you may contact us at Email :{" "}
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

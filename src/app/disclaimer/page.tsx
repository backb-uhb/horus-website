import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-white ~pt-[8rem]/[17rem] ~px-[0.625rem]/[6.25rem]">
      <div className="font-merriweather text-[#F7F8F8] ~pb-[3rem]/[6rem] ~text-[1.375rem]/[3.25rem] text-center leading-[110%] tracking-[-0.07rem] font-normal md:font-bold">
        <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
          Disclaimer
        </span>
      </div>

      <div className="font-normal ~text-[0.75rem]/[1.5rem] font-satoshi ~space-y-[1rem]/[1.5rem] leading-[120%] text-white ~tracking-[-0.004375rem]/[-0.015rem]">

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          1. General Information
        </h2>
        <p>
          The information provided on this website by The Horus Academy is for
          general informational purposes only. While we strive for accuracy,
          completeness, and timeliness, we make no warranties or representations
          of any kind about the accuracy, reliability, or suitability of the
          content.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          2. Educational Content
        </h2>
        <p>
          All courses, materials, and content offered are intended for
          educational purposes. Participation does not guarantee any specific
          financial or career outcomes. Results depend on individual effort and
          circumstances.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          3. No Professional Advice
        </h2>
        <p>
          The website and its content do not constitute financial, legal, or
          professional advice. You should consult a qualified professional
          before making any decisions based on the information provided.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          4. Third-Party Links
        </h2>
        <p>
          The website may contain links to third-party websites. We do not
          endorse or take responsibility for the content, accuracy, or
          practices of these external sites. Use them at your own risk.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          5. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, The Horus Academy shall not be
          liable for any direct, indirect, incidental, consequential, or
          punitive damages arising from your access to or use of this website
          or the content therein.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          6. Changes to Disclaimer
        </h2>
        <p>
          We reserve the right to update or amend this disclaimer at any time.
          Changes take effect immediately upon posting on the website. Please
          review this page regularly for updates.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          7. Contact Information
        </h2>
        <p>
          For any questions regarding this disclaimer, please contact us: <br />
          The Horus Academy <br />
          Email:{" "}
          <Link
            href="mailto:mail@horusfinancialacademy.com"
            className="hover:text-[#FFD38D] underline underline-offset-2 decoration-1"
          >
            mail@horusfinancialacademy.com
          </Link>
          <br />
          Phone:{" "}
          <Link
            href="tel:+919534888818"
            className="hover:text-[#FFD38D] underline underline-offset-2 decoration-1"
          >
            +91 95348 88818
          </Link>
        </p>

      </div>
    </div>
  );
};

export default page;

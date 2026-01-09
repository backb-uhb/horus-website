import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-white ~pt-[8rem]/[17rem] ~px-[0.625rem]/[6.25rem]">
      <div className="font-merriweather text-[#F7F8F8] ~pb-[3rem]/[6rem] ~text-[1.375rem]/[3.25rem] text-center leading-[110%] tracking-[-0.07rem] font-normal md:font-bold">
        <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
          Terms And Conditions
        </span>
      </div>

      <div className="font-normal ~text-[0.75rem]/[1.5rem] font-satoshi ~space-y-[1rem]/[1.5rem] leading-[120%] text-white ~tracking-[-0.004375rem]/[-0.015rem]">

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing, browsing, registering, enrolling, or using any services,
          programs, websites, mobile applications, facilities, or systems of
          The Horus Academy (“Academy”), you (“You”, “Your”) agree to be legally
          bound by these Terms and Conditions (“Terms”).
        </p>
        <p>
          If you do not agree with any part of these Terms, you must refrain from
          using the Academy’s services.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          2. Eligibility
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Users must be 18 years of age or above to enrol independently.</li>
          <li>
            Minors may enrol only with verifiable consent of a parent or legal
            guardian.
          </li>
          <li>
            The Academy reserves the right to deny or cancel access at its sole
            discretion.
          </li>
        </ul>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          3. Services Offered
        </h2>
        <p>The Academy provides:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Financial market education and training programs</li>
          <li>Offline and online classes</li>
          <li>Workshops, seminars, and events</li>
          <li>Learning materials, tools, and assessments</li>
        </ul>
        <p>
          The Academy does not provide investment advice, portfolio management,
          or guaranteed returns. All training is strictly educational in nature.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          4. User Obligations
        </h2>
        <p>You agree to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide accurate and complete information during registration</li>
          <li>Use services solely for lawful and educational purposes</li>
          <li>Maintain confidentiality of login credentials</li>
          <li>
            Refrain from copying, recording, redistributing, or misusing Academy
            content
          </li>
        </ul>
        <p>
          Violation of these obligations may result in suspension or termination
          of access without refund.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          5. Fees & Payments
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Course fees are payable in advance unless agreed otherwise in writing</li>
          <li>
            Fees may be paid as a lump sum or via approved instalment/EMI options
          </li>
          <li>
            All fees are exclusive of applicable taxes unless stated otherwise
          </li>
        </ul>
        <p>
          Non-payment or delayed payment may lead to suspension or termination
          of services.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          6. Intellectual Property
        </h2>
        <p>
          All content including but not limited to course materials, videos,
          presentations, strategies, logos, branding, and study resources are
          the exclusive intellectual property of The Horus Academy.
        </p>
        <p>
          Unauthorized reproduction, recording, distribution, or commercial use
          is strictly prohibited and may result in legal action.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          7. Limitation of Liability
        </h2>
        <p>The Academy shall not be liable for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Any trading losses or financial decisions made by users</li>
          <li>Technical interruptions, system failures, or data loss</li>
          <li>Indirect, incidental, or consequential damages</li>
        </ul>
        <p>
          Users acknowledge that financial markets involve risk and that all
          decisions are made at their own discretion.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          8. Termination
        </h2>
        <p>
          The Academy reserves the right to suspend or terminate access without
          prior notice in case of:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Breach of these Terms</li>
          <li>Misconduct, misuse, or unethical behaviour</li>
          <li>Legal or regulatory requirements</li>
        </ul>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          9. Governing Law & Jurisdiction
        </h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India. Courts having jurisdiction over the Academy’s registered
          office shall have exclusive jurisdiction.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          10. Contact Us
        </h2>
        <p>
          For any questions or clarifications regarding these Terms, you may
          contact us at:
        </p>
        <p>
          Email:{" "}
          <Link
            href="mailto:mail@horusfinancialacademy.com"
            className="hover:text-[#FFD38D] underline underline-offset-2"
          >
            mail@horusfinancialacademy.com
          </Link>
          <br />
          Phone:{" "}
          <Link
            href="tel:+919534888818"
            className="hover:text-[#FFD38D] underline underline-offset-2 whitespace-nowrap"
          >
            +91 95348 88818
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;

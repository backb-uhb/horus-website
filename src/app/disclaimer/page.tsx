import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-white ~pt-[8rem]/[17rem] ~px-[0.625rem]/[6.25rem]">
      <div className="font-merriweather text-[#F7F8F8] ~pb-[3rem]/[6rem] ~text-[1.375rem]/[3.25rem] text-center leading-[110%] tracking-[-0.07rem] font-normal md:font-bold">
        <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
          Refund & Cancellation Policy
        </span>
      </div>

      <div className="font-normal ~text-[0.75rem]/[1.5rem] font-satoshi ~space-y-[1rem]/[1.5rem] leading-[120%] text-white ~tracking-[-0.004375rem]/[-0.015rem]">

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          1. General Policy
        </h2>
        <p>
          All course enrolments with The Horus Academy are subject to this Refund &
          Cancellation Policy. By enrolling, you expressly agree to the terms
          stated herein.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          2. Cancellation by Student
        </h2>

        <p className="font-semibold text-[#FFD38D]">
          2.1 Before Course Commencement
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Cancellation requests made at least 7 days prior to course start
            date may be eligible for a refund.
          </li>
          <li>
            Refund amount shall be subject to administrative and processing
            deductions.
          </li>
        </ul>

        <p className="font-semibold text-[#FFD38D] mt-2">
          2.2 After Course Commencement
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            No refunds shall be issued once the course has commenced for more
            than 3 days.
          </li>
          <li>
            Access to learning materials, recordings, or LMS shall be deemed
            course commencement.
          </li>
        </ul>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          3. Non-Refundable Cases
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Partial attendance or non-attendance</li>
          <li>Change of personal schedule or preferences</li>
          <li>Failure to complete the course</li>
          <li>Removal due to misconduct or violation of terms</li>
          <li>Digital course access already granted</li>
        </ul>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          4. EMI / Installment Payments
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>EMI or installment plans are binding financial commitments.</li>
          <li>
            Refunds, if any, shall not absolve the student from obligations
            toward third-party lenders.
          </li>
          <li>
            Processing charges, interest, and lender fees are non-refundable.
          </li>
        </ul>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          5. Course Transfer
        </h2>
        <p>At the sole discretion of the Academy:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Course transfer to another batch or program may be permitted once.</li>
          <li>Transfer requests must be made in writing.</li>
          <li>Price differences, if any, must be settled.</li>
        </ul>
        <p>Transfers do not qualify as refunds.</p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          6. Cancellation by the Academy
        </h2>
        <p>
          The Academy reserves the right to cancel or reschedule a course due to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Insufficient enrolments</li>
          <li>Faculty unavailability</li>
          <li>Force majeure events</li>
        </ul>
        <p>In such cases, students may opt for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full refund, or</li>
          <li>Transfer to an alternate batch or course</li>
        </ul>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          7. Refund Processing
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Approved refunds shall be processed within 15–30 working days.</li>
          <li>Refunds shall be made to the original payment method only.</li>
          <li>Taxes and third-party charges are non-refundable.</li>
        </ul>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          8. Force Majeure
        </h2>
        <p>
          The Academy shall not be liable for failure or delay caused by events
          beyond reasonable control, including natural disasters, government
          actions, or system outages.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          9. Policy Modifications
        </h2>
        <p>
          The Academy reserves the right to amend this policy at any time.
          Updated versions shall be effective immediately upon publication.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          10. Contact & Grievance
        </h2>
        <p>
          Grievance Officer <br />
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

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-white ~pt-[8rem]/[17rem] ~px-[0.625rem]/[6.25rem]">
      <div className="font-merriweather text-[#F7F8F8] ~pb-[3rem]/[6rem] ~text-[1.375rem]/[3.25rem] text-center leading-[110%] tracking-[-0.07rem] font-normal md:font-bold">
        <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
          Privacy Policy
        </span>
      </div>

      <div className="font-normal ~text-[0.75rem]/[1.5rem] font-satoshi ~space-y-[1rem]/[1.5rem] leading-[120%] text-white ~tracking-[-0.004375rem]/[-0.015rem]">

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          1. Definitions
        </h2>
        <p>
          For the purpose of this Privacy Policy:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>“Academy”, “We”, “Us”, “Our”</strong> refers to The Horus Academy.
          </li>
          <li>
            <strong>“User”, “You”, “Your”</strong> refers to any individual accessing our website, mobile applications, premises, services, programs, or systems.
          </li>
          <li>
            <strong>“Personal Data”</strong> means any data about an identifiable individual as defined under applicable Indian laws.
          </li>
          <li>
            <strong>“Processing”</strong> includes collection, recording, storage, use, disclosure, transfer, or deletion of Personal Data.
          </li>
        </ul>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          2. Applicability & Scope
        </h2>
        <p>
          This Privacy Policy governs the collection, processing, storage, disclosure, and protection of Personal Data through:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Official websites and web portals</li>
          <li>Mobile applications</li>
          <li>Learning Management Systems (LMS)</li>
          <li>Customer Relationship Management (CRM) tools</li>
          <li>Offline forms and physical records</li>
          <li>Training programs, events, and academy premises</li>
        </ul>
        <p>
          This Policy is issued in compliance with the Information Technology Act, 2000,
          IT Rules, 2011, and the Digital Personal Data Protection Act, 2023.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          3. Consent
        </h2>
        <p>
          By accessing or using our services, you expressly consent to the collection,
          processing, storage, and transfer of your Personal Data and receiving academic,
          administrative, promotional, and operational communications. Consent may be
          withdrawn at any time, subject to legal and contractual obligations.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          4. Categories of Personal Data Collected
        </h2>
        <p><strong>4.1 Identity & Contact Information</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name</li>
          <li>Mobile number</li>
          <li>Email address</li>
          <li>Residential address</li>
          <li>Emergency contact details</li>
        </ul>

        <p><strong>4.2 Academic & Professional Information</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Course and batch details</li>
          <li>Attendance, assessments, and certifications</li>
          <li>Performance and participation records</li>
        </ul>

        <p><strong>4.3 Financial Information</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fee details and payment confirmations</li>
          <li>Transaction references and invoices</li>
        </ul>
        <p>
          (No credit/debit card or banking credentials are stored by the Academy.)
        </p>

        <p><strong>4.4 Technical & Usage Data</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>IP address</li>
          <li>Device, browser, and log data</li>
          <li>Cookies and analytics data</li>
        </ul>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          5. Purpose of Processing
        </h2>
        <p>
          Personal Data is processed for enrolment, training delivery, certification,
          academic administration, communication, fee collection, audits, legal compliance,
          and improvement of services and security.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          6. Data Sharing & Disclosure
        </h2>
        <p>
          We do not sell or commercially exploit Personal Data. Data may be disclosed only
          to authorized service providers, financial institutions, or government authorities
          as required by law. All third parties are bound by confidentiality obligations.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          7. Data Storage & Security Measures
        </h2>
        <p>
          We implement reasonable security practices including access-controlled systems,
          secure servers, encryption where applicable, and periodic security reviews.
          However, no system can guarantee absolute security.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          8. Data Retention
        </h2>
        <p>
          Personal Data is retained only as long as necessary to fulfill its purpose or
          as required by applicable law, audits, or contractual obligations. Data is
          securely deleted or anonymized thereafter.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          9. User Rights
        </h2>
        <p>
          Subject to applicable law, you may access, correct, withdraw consent, request
          erasure of Personal Data, or file a grievance regarding misuse.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          10. Cookies & Tracking Technologies
        </h2>
        <p>
          We may use cookies and analytics tools to enhance functionality and improve
          user experience. You may manage cookie preferences through browser settings.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          11. Children & Minors
        </h2>
        <p>
          We do not knowingly collect Personal Data from individuals below 18 years of age
          without verifiable parental or guardian consent.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          12. Amendments
        </h2>
        <p>
          This Privacy Policy may be amended at any time. Updated versions will be published
          on official platforms and shall be effective from the date of publication.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          13. Governing Law & Jurisdiction
        </h2>
        <p>
          This Privacy Policy shall be governed by the laws of India. Courts having
          jurisdiction over the Academy’s registered office shall have exclusive jurisdiction.
        </p>

        <h2 className="text-[#FFD38D] font-bold ~text-[1rem]/[1.875rem]">
          14. Grievance Redressal & Contact Details
        </h2>
        <p>
          Grievances or data-related requests may be addressed to:
        </p>
        <p>
          <strong>The Horus Academy</strong><br />
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

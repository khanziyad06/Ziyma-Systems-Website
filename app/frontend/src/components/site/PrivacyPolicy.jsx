import React, { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F4F1EA] min-h-screen text-[#142523] font-sans pt-32 pb-20">
      <Navbar />
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-8">Privacy Policy</h1>

        <p className="mb-4"><strong>Effective Date:</strong> 14/07/2026<br />
          <strong>Last Updated:</strong> 14/07/2026</p>

        <p className="mb-10">Ziyma Systems ("we," "us," or "our") operates the website ziymasystems.in (the "Site"). This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using the Site, you agree to the practices described in this policy.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">1. Information We Collect</h2>
        <p className="mb-4">We currently collect personal data only when you voluntarily submit it through our <strong>contact/lead form</strong>. This may include:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Any additional details you choose to include in your message</li>
        </ul>
        <p className="mb-10">We do <strong>not</strong> currently collect any information automatically through analytics, cookies, or tracking tools. We do not currently handle payments or bookings on the Site, so no payment or financial data is collected at this time. If this changes in the future, this policy will be updated accordingly (see Section 8).</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information you submit solely to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Respond to your inquiry or request</li>
          <li>Follow up regarding our services</li>
          <li>Maintain records of business communications</li>
        </ul>
        <p className="mb-10">We do not use your information for automated decision-making, profiling, or advertising purposes.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">3. Cookies and Tracking Technologies</h2>
        <p className="mb-10">The Site does not currently use analytics, advertising, or tracking cookies. If we introduce such tools in the future (e.g., for site analytics), we will update this policy to describe what is collected and provide any required consent mechanisms.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">4. How We Share Your Information</h2>
        <p className="mb-4">We do not sell, rent, or trade your personal data. We may share your information only:</p>
        <ul className="list-disc pl-6 mb-10 space-y-2">
          <li>With service providers who help us operate the Site or respond to inquiries (e.g., email/hosting providers), under confidentiality obligations</li>
          <li>If required by law, regulation, or valid legal process</li>
          <li>To protect the rights, property, or safety of Ziyma Systems, our users, or others</li>
        </ul>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">5. Data Retention</h2>
        <p className="mb-10">We retain the information submitted through the contact/lead form only for as long as necessary to respond to your inquiry and maintain reasonable business records, unless a longer retention period is required by law.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">6. Data Security</h2>
        <p className="mb-10">We take reasonable technical and organizational measures to protect the personal data you share with us from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">7. Your Rights</h2>
        <p className="mb-4">Depending on applicable law, you may have the right to:</p>
        <ul className="list-disc pl-6 mb-10 space-y-2">
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent for us to contact you</li>
        </ul>
        <p className="mb-10">To exercise any of these rights, contact us using the details in Section 9.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">8. Changes to This Policy</h2>
        <p className="mb-10">We may update this Privacy Policy from time to time, particularly as the Site adds new features (such as analytics, bookings, or payments). Material changes will be reflected by updating the "Last Updated" date above. We encourage you to review this page periodically.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">9. Children's Privacy</h2>
        <p className="mb-10">The Site is not directed at individuals under the age of 18, and we do not knowingly collect personal data from children.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">10. Contact Us</h2>
        <p className="mb-4">If you have questions about this Privacy Policy or how your data is handled, contact us at:</p>
        <p className="mb-10"><strong>Email:</strong> contact@ziymasystems.in<br />
          <strong>Address:</strong> Mumbai, Maharashtra</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <p className="text-sm text-[#5d6b68] italic">This policy is intended to comply with applicable Indian data protection requirements, including the Information Technology Act, 2000, the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, where applicable. This document is provided as a starting draft and has not been reviewed by a lawyer — we'd recommend having one review it before publishing, especially as DPDPA compliance rules continue to be finalized in India.</p>

      </div>
      <Footer />
    </div>
  );
};

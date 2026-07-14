import React, { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Link } from "react-router-dom";

export const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F4F1EA] min-h-screen text-[#142523] font-sans pt-32 pb-20">
      <Navbar />
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-8">Terms of Service</h1>

        <p className="mb-4"><strong>Effective Date:</strong> 14/07/2026<br />
          <strong>Last Updated:</strong> 14/07/2026</p>

        <p className="mb-10">Welcome to ziymasystems.in (the "Site"), operated by Ziyma Systems ("we," "us," "our"). By accessing or using the Site, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the Site.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">1. About Our Services</h2>
        <p className="mb-4">Ziyma Systems provides website development, data systems (auditing and dashboards), and AI automation services for businesses, including clinics, restaurants, startups, and agencies. The Site is provided to share information about these services and to allow visitors to submit inquiries through our contact/lead form.</p>
        <p className="mb-10">The Site does not currently process payments or bookings. If this changes, these Terms will be updated to include applicable payment, refund, and service-delivery terms.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">2. Use of the Site</h2>
        <p className="mb-4">You agree to use the Site only for lawful purposes. You agree not to:</p>
        <ul className="list-disc pl-6 mb-10 space-y-2">
          <li>Use the Site in any way that violates applicable law or regulation</li>
          <li>Attempt to gain unauthorized access to the Site, its systems, or related networks</li>
          <li>Submit false, misleading, or fraudulent information through the contact/lead form</li>
          <li>Use any automated system (bots, scrapers) to access the Site without our permission</li>
          <li>Interfere with or disrupt the operation of the Site</li>
        </ul>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">3. Submissions Through the Contact/Lead Form</h2>
        <p className="mb-4">When you submit your name, email, phone number, or other details through our contact/lead form, you confirm that:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>The information you provide is accurate and belongs to you</li>
          <li>You consent to being contacted by Ziyma Systems regarding your inquiry</li>
        </ul>
        <p className="mb-10">Please see our <Link to="/privacy-policy" className="text-[#135C50] underline">Privacy Policy</Link> for details on how this information is collected, used, and stored.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">4. Intellectual Property</h2>
        <p className="mb-10">All content on the Site — including text, graphics, logos, and design — is the property of Ziyma Systems or its licensors and is protected by applicable intellectual property laws, unless otherwise stated. You may not copy, reproduce, distribute, or create derivative works from Site content without our prior written consent.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">5. No Warranty</h2>
        <p className="mb-10">The Site and its content are provided "as is" and "as available," without warranties of any kind, whether express or implied, including but not limited to warranties of accuracy, completeness, or fitness for a particular purpose. We do not guarantee that the Site will be uninterrupted, secure, or error-free.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">6. Limitation of Liability</h2>
        <p className="mb-4">To the fullest extent permitted by applicable law, Ziyma Systems shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Site.</p>
        <p className="mb-10">Nothing in these Terms limits liability that cannot be excluded or limited under applicable Indian law.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">7. Third-Party Links</h2>
        <p className="mb-10">The Site may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any third-party sites, and inclusion of a link does not imply endorsement.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">8. Service Engagements</h2>
        <p className="mb-10">These Terms govern use of the Site itself. Any actual engagement for website development, data systems, or AI automation services will be governed by a separate written agreement or proposal between Ziyma Systems and the client, which will take precedence over these Terms for matters it covers.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">9. Governing Law</h2>
        <p className="mb-10">These Terms are governed by the laws of India. Any disputes arising from your use of the Site shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">10. Changes to These Terms</h2>
        <p className="mb-10">We may update these Terms from time to time, particularly as the Site adds new features (such as payments or bookings). Material changes will be reflected by updating the "Last Updated" date above.</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <h2 className="text-2xl font-display font-medium mb-4">11. Contact Us</h2>
        <p className="mb-4">If you have questions about these Terms, contact us at:</p>
        <p className="mb-10"><strong>Email:</strong> contact@ziymasystems.in<br />
          <strong>Address:</strong> Mumbai, Maharashtra</p>

        <hr className="border-[#d9d3c4] mb-10" />

        <p className="text-sm text-[#5d6b68] italic">This document is provided as a starting draft and has not been reviewed by a lawyer. We'd recommend having one review it before publishing — particularly the governing law/jurisdiction clause and the service engagement section, which should align with how you structure client contracts.</p>

      </div>
      <Footer />
    </div>
  );
};

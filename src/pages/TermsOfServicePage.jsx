
import React from "react";
import { motion } from "framer-motion";

const TermsOfServicePage = () => {
  return (
    <div className="pt-20 md:pt-24"> {/* Added padding top */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Namaste North East website (the "Service") operated by Namaste North East ("us", "we", or "our").</p>

            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Bookings and Payments</h2>
            <p>All bookings made through our Service are subject to availability and confirmation. Prices are subject to change without notice. Payment terms will be specified at the time of booking. We reserve the right to cancel bookings if payments are not received as per the agreed terms.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Cancellations and Refunds</h2>
            <p>Cancellation policies vary depending on the service booked. Please refer to the specific cancellation policy provided at the time of booking. Refunds, if applicable, will be processed according to our refund policy.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-3">Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Namaste North East and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Namaste North East.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Limitation of Liability</h2>
            <p>In no event shall Namaste North East, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>By email: info@namastenortheast.com</li>
              <li>By visiting this page on our website: <a href="/contact" className="text-primary hover:underline">namastenortheast.com/contact</a></li>
              <li>By phone number: +91 8822989693</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

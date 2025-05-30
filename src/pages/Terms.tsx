
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using NeuroptAI's platform and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-600">
                  NeuroptAI provides an AI-powered SaaS platform designed to automate, optimize, and enhance various operational processes including document processing, fraud detection, customer support automation, risk assessment, compliance monitoring, and transaction management.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    To access certain features of our service, you must register for an account. When you register, you agree to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Provide accurate, current, and complete information</li>
                    <li>• Maintain and promptly update your account information</li>
                    <li>• Maintain the security of your password and account</li>
                    <li>• Accept all responsibility for all activities under your account</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
                <p className="text-gray-600 mb-4">
                  You agree not to use our service to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Infringe upon intellectual property rights</li>
                  <li>• Upload malicious software or harmful content</li>
                  <li>• Attempt to gain unauthorized access to our systems</li>
                  <li>• Interfere with or disrupt our services</li>
                  <li>• Use our service for any unlawful or prohibited activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data and Privacy</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Your data privacy and security are paramount to us. By using our service:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• You retain ownership of all data you upload</li>
                    <li>• We process your data solely to provide our services</li>
                    <li>• We implement enterprise-grade security measures</li>
                    <li>• We comply with applicable data protection regulations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment and Billing</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    For paid services:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fees are billed in advance on a monthly or annual basis</li>
                    <li>• All fees are non-refundable except as required by law</li>
                    <li>• We may change our pricing with 30 days notice</li>
                    <li>• You are responsible for all taxes and fees</li>
                    <li>• Failure to pay may result in service suspension</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
                <p className="text-gray-600">
                  While we strive for 99.9% uptime, we do not guarantee uninterrupted service. We may experience downtime for maintenance, updates, or due to factors beyond our control. We will provide reasonable notice for planned maintenance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                <p className="text-gray-600">
                  The NeuroptAI platform, including all software, algorithms, and content, is protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer our platform without explicit written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-600">
                  To the maximum extent permitted by law, NeuroptAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <p className="text-gray-600">
                  Either party may terminate this agreement at any time. Upon termination, your access to the service will cease, and we will delete your data according to our data retention policy, unless legally required to retain it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. We will notify users of material changes via email or through our platform. Continued use of our service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 text-gray-600">
                  <p>Email: legal@neuroptai.com</p>
                  <p>Address: NeuroptAI Legal Team, San Francisco, CA</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;

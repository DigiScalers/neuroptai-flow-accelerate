
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600">
                  NeuroptAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered SaaS platform and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-600">
                      We collect personal information that you voluntarily provide, including name, email address, company information, and contact details when you register for our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Data</h3>
                    <p className="text-gray-600">
                      We automatically collect information about how you use our platform, including log data, device information, and usage patterns to improve our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Data</h3>
                    <p className="text-gray-600">
                      Documents and data you upload to our platform for processing are handled according to strict security protocols and are never used for any purpose other than providing our services to you.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide, maintain, and improve our AI-powered services</li>
                  <li>• Process transactions and manage your account</li>
                  <li>• Communicate with you about our services and support</li>
                  <li>• Ensure platform security and prevent fraud</li>
                  <li>• Comply with legal obligations and regulatory requirements</li>
                  <li>• Analyze usage patterns to enhance user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• End-to-end encryption for all data transmission</li>
                  <li>• Advanced access controls and authentication</li>
                  <li>• Regular security audits and compliance assessments</li>
                  <li>• SOC 2 Type II and ISO 27001 certified infrastructure</li>
                  <li>• Secure data centers with 24/7 monitoring</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• With your explicit consent</li>
                  <li>• To trusted service providers who assist in our operations</li>
                  <li>• When required by law or to protect our rights</li>
                  <li>• In connection with a business transaction or merger</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Right to access and review your data</li>
                  <li>• Right to correct or update your information</li>
                  <li>• Right to delete your account and data</li>
                  <li>• Right to data portability</li>
                  <li>• Right to opt-out of certain communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h2>
                <p className="text-gray-600">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place and comply with applicable data protection laws including GDPR and CCPA.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 text-gray-600">
                  <p>Email: privacy@neuroptai.com</p>
                  <p>Address: NeuroptAI Privacy Team, San Francisco, CA</p>
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

export default Privacy;

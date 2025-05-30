
import { Users, Target, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description: "We constantly push the boundaries of AI technology to deliver cutting-edge solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer Focus",
      description: "Our customers' success is our priority. We build solutions that truly solve real problems."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Impact",
      description: "We're building AI solutions that can transform industries and improve lives worldwide."
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Customers" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50M+", label: "Documents Processed" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NeuroptAI
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform how enterprises and financial institutions operate through the power of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020 by a team of AI researchers and enterprise software veterans, NeuroptAI was born from the recognition that traditional business processes were ripe for intelligent automation.
              </p>
              <p className="text-gray-600 mb-4">
                We saw enterprises struggling with manual processes, compliance challenges, and the need for faster, more accurate operations. Our founders combined decades of experience in machine learning, enterprise software, and financial services to create a platform that could truly transform how businesses operate.
              </p>
              <p className="text-gray-600">
                Today, we serve over 500 enterprise customers worldwide, processing millions of documents and transactions daily while maintaining the highest standards of security and compliance.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8">
            To democratize AI technology and make intelligent automation accessible to every enterprise, enabling them to focus on what matters most - serving their customers and growing their business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Simplify</h3>
              <p className="text-blue-100">Complex AI made simple and accessible</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Scale</h3>
              <p className="text-blue-100">Solutions that grow with your business</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
              <p className="text-blue-100">Enterprise-grade security and compliance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

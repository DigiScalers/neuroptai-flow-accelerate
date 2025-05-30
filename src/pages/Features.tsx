
import { Brain, Shield, Users, TrendingUp, CheckCircle, Cpu, FileText, BarChart3, Clock, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Features = () => {
  const mainFeatures = [
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Document Processing",
      description: "Advanced AI-powered document analysis, extraction, and processing with industry-leading accuracy.",
      features: [
        "OCR and text extraction",
        "Document classification",
        "Data validation and verification",
        "Multi-language support",
        "Real-time processing"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Fraud Detection",
      description: "Real-time fraud detection and prevention using machine learning algorithms and behavioral analysis.",
      features: [
        "Real-time transaction monitoring",
        "Behavioral pattern analysis",
        "Risk scoring algorithms",
        "Anomaly detection",
        "Customizable rules engine"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Customer Support Automation",
      description: "Intelligent chatbots and automated support systems that enhance customer experience.",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Intelligent ticket routing",
        "Automated responses",
        "Escalation management"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and predictive modeling for informed decision-making.",
      features: [
        "Predictive modeling",
        "Risk scoring",
        "Portfolio analysis",
        "Stress testing",
        "Regulatory compliance"
      ]
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      title: "Compliance Monitoring",
      description: "Automated compliance checking and regulatory reporting to ensure adherence to standards.",
      features: [
        "Automated compliance checks",
        "Regulatory reporting",
        "Audit trail management",
        "Policy enforcement",
        "Real-time monitoring"
      ]
    },
    {
      icon: <Cpu className="h-12 w-12 text-blue-600" />,
      title: "Transaction Management",
      description: "Streamlined transaction processing with intelligent automation and workflow optimization.",
      features: [
        "Automated processing",
        "Workflow optimization",
        "Exception handling",
        "Performance monitoring",
        "Integration capabilities"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Deep insights with customizable dashboards and reporting"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Operations",
      description: "Round-the-clock automated processing and monitoring"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Process thousands of transactions per second"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Features
            </span>{" "}
            for Enterprise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive suite of AI-powered features can transform your business operations and drive efficiency across your organization.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Enhanced features that make NeuroptAI the complete solution for your enterprise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;

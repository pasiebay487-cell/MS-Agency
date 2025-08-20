import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Search, Megaphone, Mail, BarChart3, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your organic search rankings and drive more qualified traffic to your website with our proven SEO strategies.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
  },
  {
    icon: Megaphone,
    title: "PPC Advertising",
    description: "Get immediate results with targeted pay-per-click campaigns across Google Ads, Facebook, and other platforms.",
    features: ["Google Ads", "Facebook Ads", "Campaign Management", "Conversion Tracking"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Build lasting relationships with your audience through personalized email campaigns that convert.",
    features: ["List Building", "Automation", "A/B Testing", "Analytics"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and detailed performance reports.",
    features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Monthly Reports"]
  },
  {
    icon: Globe,
    title: "Social Media Marketing",
    description: "Expand your brand reach and engage with your audience across all major social media platforms.",
    features: ["Content Creation", "Community Management", "Social Ads", "Influencer Partnerships"]
  },
  {
    icon: Smartphone,
    title: "Content Marketing",
    description: "Attract and retain customers with valuable, relevant content that establishes your brand authority.",
    features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital marketing services designed to help your business grow online and reach your target audience effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
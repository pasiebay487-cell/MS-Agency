import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const caseStudies = [
  {
    title: "E-commerce Growth Campaign",
    client: "TechStore Inc.",
    industry: "E-commerce",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    description: "Increased online sales by 300% through comprehensive SEO and PPC strategy.",
    results: [
      { icon: TrendingUp, label: "Sales Increase", value: "+300%" },
      { icon: Users, label: "Traffic Growth", value: "+250%" },
      { icon: DollarSign, label: "Revenue", value: "$2.5M" }
    ],
    tags: ["SEO", "PPC", "E-commerce"],
    duration: "6 months"
  },
  {
    title: "Local Business Expansion",
    client: "City Dental Clinic",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop",
    description: "Helped a local dental practice expand to 3 new locations through targeted local SEO.",
    results: [
      { icon: Users, label: "New Patients", value: "+400" },
      { icon: TrendingUp, label: "Online Visibility", value: "+180%" },
      { icon: DollarSign, label: "Revenue Growth", value: "+150%" }
    ],
    tags: ["Local SEO", "Content Marketing", "Social Media"],
    duration: "8 months"
  },
  {
    title: "SaaS Lead Generation",
    client: "CloudTech Solutions",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
    description: "Generated high-quality leads for a B2B SaaS company through content marketing and LinkedIn advertising.",
    results: [
      { icon: Users, label: "Qualified Leads", value: "1,200" },
      { icon: TrendingUp, label: "Conversion Rate", value: "+85%" },
      { icon: DollarSign, label: "Pipeline Value", value: "$800K" }
    ],
    tags: ["Content Marketing", "LinkedIn Ads", "Lead Generation"],
    duration: "4 months"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth through strategic digital marketing campaigns.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={250}
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{study.industry}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {study.client} • {study.duration}
                </CardDescription>
                <p className="text-gray-600 text-sm">{study.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Results */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  {study.results.map((result, resultIndex) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={resultIndex} className="p-2">
                        <IconComponent className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                        <div className="font-bold text-sm text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full group">
                  View Case Study
                  <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg">View All Case Studies</Button>
        </div>
      </div>
    </section>
  );
}
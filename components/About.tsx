import { Button } from "./ui/button";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const achievements = [
  {
    icon: Users,
    number: "500+",
    label: "Satisfied Clients"
  },
  {
    icon: Award,
    number: "50+",
    label: "Industry Awards"
  },
  {
    icon: TrendingUp,
    number: "10+",
    label: "Years Experience"
  }
];

const benefits = [
  "Data-driven marketing strategies",
  "Dedicated account management",
  "24/7 customer support",
  "Transparent reporting",
  "ROI-focused campaigns",
  "Industry expertise"
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Digital marketing team working together"
              className="rounded-2xl shadow-lg w-full"
              width={600}
              height={400}
            />
            
            {/* Achievements Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index}>
                      <IconComponent className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="font-bold text-gray-900">{achievement.number}</div>
                      <div className="text-xs text-gray-600">{achievement.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                About DigitalPro
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're a team of passionate digital marketing experts dedicated to helping businesses thrive in the digital landscape. With over 10 years of experience, we've helped hundreds of companies achieve their online goals.
              </p>
              <p className="text-gray-600 mb-8">
                Our approach combines cutting-edge technology with proven marketing strategies to deliver measurable results. We believe in transparent communication, data-driven decisions, and building long-term partnerships with our clients.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
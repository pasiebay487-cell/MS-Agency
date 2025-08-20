import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  return (
    <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Grow Your Business with
                <span className="text-blue-600 block">Digital Marketing</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                We help ambitious businesses scale their online presence through strategic digital marketing campaigns that drive real results and measurable growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Your Campaign
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">2M+</div>
                <div className="text-sm text-gray-600">Leads Generated</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Digital marketing dashboard"
                className="rounded-2xl shadow-2xl w-full"
                width={600}
                height={400}
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium text-gray-900">ROI Increase</div>
                <div className="text-2xl font-bold text-green-600">+245%</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium text-gray-900">Traffic Growth</div>
                <div className="text-2xl font-bold text-blue-600">+180%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
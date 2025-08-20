import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup Co.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=100&h=100&fit=crop&crop=face",
    content: "DigitalPro transformed our online presence completely. Our website traffic increased by 400% and we're getting more qualified leads than ever before. Their team is professional, responsive, and truly understands digital marketing.",
    rating: 5,
    company: "TechStartup Co."
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, RetailMax",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Working with DigitalPro has been a game-changer for our e-commerce business. Their PPC campaigns generated a 250% ROI in just 3 months. I highly recommend their services to any business looking to grow online.",
    rating: 5,
    company: "RetailMax"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Local Wellness Spa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "The local SEO work they did for our spa was incredible. We now rank #1 for all our target keywords and our bookings have tripled. The team is knowledgeable, friendly, and delivers real results.",
    rating: 5,
    company: "Local Wellness Spa"
  },
  {
    name: "David Park",
    role: "VP of Marketing, B2B Solutions Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "DigitalPro's content marketing strategy helped us establish thought leadership in our industry. Our blog traffic increased by 300% and we're generating high-quality leads consistently. Excellent work!",
    rating: 5,
    company: "B2B Solutions Inc."
  },
  {
    name: "Lisa Thompson",
    role: "Owner, Fashion Boutique",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "Their social media marketing completely transformed our brand presence. Our Instagram following grew from 500 to 15,000 in 6 months, and our online sales have increased by 200%. Amazing results!",
    rating: 5,
    company: "Fashion Boutique"
  },
  {
    name: "James Wilson",
    role: "Director, Professional Services",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "The email marketing campaigns DigitalPro created for us have been outstanding. Our open rates improved by 150% and conversion rates by 85%. They really know how to connect with our audience.",
    rating: 5,
    company: "Professional Services"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real clients have to say about working with DigitalPro and the results they've achieved.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-2xl font-bold text-gray-400">500+ Reviews</div>
            <div className="text-2xl font-bold text-gray-400">4.9★ Rating</div>
            <div className="text-2xl font-bold text-gray-400">95% Retention</div>
            <div className="text-2xl font-bold text-gray-400">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
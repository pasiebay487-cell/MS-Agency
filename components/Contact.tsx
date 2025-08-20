import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri 9am to 6pm EST"
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@digitalpro.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Office",
    content: "123 Marketing St, Suite 100",
    description: "New York, NY 10001"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 9AM - 6PM",
    description: "Weekend support available"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our digital marketing experts today. We'll create a custom strategy that drives real results for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Get Your Free Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours with a customized marketing strategy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seo">SEO Optimization</SelectItem>
                        <SelectItem value="ppc">PPC Advertising</SelectItem>
                        <SelectItem value="social">Social Media Marketing</SelectItem>
                        <SelectItem value="email">Email Marketing</SelectItem>
                        <SelectItem value="content">Content Marketing</SelectItem>
                        <SelectItem value="analytics">Analytics & Reporting</SelectItem>
                        <SelectItem value="all">Full Marketing Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Monthly Budget</Label>
                    <Select onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your business goals and what you'd like to achieve with digital marketing..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Get My Free Consultation
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Have questions about our services? Our team of digital marketing experts is here to help. Reach out to us using any of the methods below.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-900">{info.content}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional CTA */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Need Immediate Assistance?</h4>
              <p className="text-gray-600 mb-4">
                Call us directly for urgent inquiries or to speak with one of our marketing specialists right away.
              </p>
              <Button variant="outline">Call Now: (555) 123-4567</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
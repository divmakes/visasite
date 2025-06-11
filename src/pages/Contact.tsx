
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for contacting us. Our team will get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      country: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        '23 MG Road, Connaught Place',
        'New Delhi, India - 110001',
        'Near Metro Station Gate 4'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91-9876543210',
        '+91-9876543211',
        'WhatsApp Available'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@visaconsult.in',
        'support@visaconsult.in',
        'pr@visaconsult.in'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 7:00 PM',
        'Sunday: 10:00 AM - 4:00 PM',
        'Emergency Support Available'
      ]
    }
  ];

  const services = [
    'Tourist Visa',
    'Student Visa',
    'Work Visa',
    'Business Visa',
    'PR Assistance',
    'Document Attestation',
    'General Inquiry'
  ];

  const countries = [
    'Canada',
    'Australia',
    'USA',
    'United Kingdom',
    'Germany',
    'New Zealand',
    'Singapore',
    'UAE',
    'Other'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to start your visa journey? Contact our expert team for personalized guidance and free consultation. We're here to help make your international dreams come true.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Send Us a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and our experts will get back to you with personalized guidance for your visa needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91-9876543210"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                      Destination Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your specific requirements, timeline, or any questions you have..."
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Quick Actions */}
            <div className="space-y-8">
              {/* Google Map */}
              <div className="bg-card rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Our Location</h3>
                  <p className="text-muted-foreground mb-4">
                    Visit our office in the heart of New Delhi for face-to-face consultation
                  </p>
                </div>
                <div className="h-64 bg-muted">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0157!2d77.2309!3d28.6329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd30e8d3c7d3%3A0x6b5d0c5e0e0e0e0e!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VisaConsult.in Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button className="w-full justify-start" size="lg">
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now: +91-9876543210
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WhatsApp Chat
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Calendar className="mr-3 h-5 w-5" />
                    Book Appointment
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">💡 Pro Tip</h4>
                  <p className="text-sm text-muted-foreground">
                    For faster response, include your preferred consultation time and specific visa type in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does the visa process take?",
                answer: "Processing times vary by country and visa type, typically ranging from 2-12 weeks. We provide accurate timelines during consultation."
              },
              {
                question: "What documents do I need?",
                answer: "Document requirements depend on your specific case. We provide a complete checklist after evaluating your profile."
              },
              {
                question: "Do you guarantee visa approval?",
                answer: "While we cannot guarantee approval, our 98% success rate reflects our expertise in preparing strong applications."
              },
              {
                question: "What are your consultation fees?",
                answer: "Initial consultation is completely free. Our service fees are transparent with no hidden charges."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-foreground mb-3">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

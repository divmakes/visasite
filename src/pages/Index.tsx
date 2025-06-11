
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Users, Award, Clock, CheckCircle, ArrowRight, Globe, Star, Shield, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const stats = [
    { icon: Users, number: '15,000+', label: 'Happy Clients' },
    { icon: Award, number: '14+', label: 'Years Experience' },
    { icon: CheckCircle, number: '98%', label: 'Success Rate' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
  ];

  const quickServices = [
    {
      title: 'Tourist Visa',
      description: 'Explore the world with our tourist visa assistance',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
      price: 'Starting ₹5,000',
      duration: '7-15 days'
    },
    {
      title: 'Student Visa',
      description: 'Study abroad with proper visa guidance',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      price: 'Starting ₹15,000',
      duration: '4-8 weeks'
    },
    {
      title: 'Work Visa',
      description: 'Professional opportunities worldwide',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      price: 'Starting ₹20,000',
      duration: '6-12 weeks'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      country: 'Canada',
      rating: 5,
      text: 'VisaConsult.in made my Canadian study visa process incredibly smooth. Their team guided me through every step.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      country: 'Australia',
      rating: 5,
      text: 'Got my Australian work visa approved in just 8 weeks. Excellent service and transparent pricing.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    {
      name: 'Anita Gupta',
      location: 'Bangalore',
      country: 'Germany',
      rating: 5,
      text: 'Professional service for my German tourist visa. Highly recommend their expertise.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Government Authorized',
      description: 'Licensed and authorized visa consultancy with proper certifications'
    },
    {
      icon: Globe,
      title: '50+ Countries',
      description: 'Extensive experience in visa processes for destinations worldwide'
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: 'Personal visa consultant assigned to each client for end-to-end support'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning consultancy with multiple industry accolades'
    }
  ];

  const countries = [
    { name: 'Canada', flag: '🇨🇦', visaTypes: '15+ visa types' },
    { name: 'Australia', flag: '🇦🇺', visaTypes: '12+ visa types' },
    { name: 'USA', flag: '🇺🇸', visaTypes: '10+ visa types' },
    { name: 'UK', flag: '🇬🇧', visaTypes: '8+ visa types' },
    { name: 'Germany', flag: '🇩🇪', visaTypes: '6+ visa types' },
    { name: 'Singapore', flag: '🇸🇬', visaTypes: '5+ visa types' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-orange-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-orange-300 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-sm font-medium">Trusted by 15,000+ Indians</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your Gateway to 
                  <span className="text-orange-300"> Global Dreams</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  India's #1 visa consultancy with 14+ years of experience. We've helped over 15,000 Indians achieve their international aspirations with a 98% success rate.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91-9876543210
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>No Hidden Charges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Fast Processing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Visa Consultation" 
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose VisaConsult.in?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Since 2010, we have been India's most trusted visa consultancy, helping thousands of Indians fulfill their dreams of studying, working, and settling abroad. Our team of certified immigration experts provides personalized guidance throughout your visa journey.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Expert Visa Counselors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Document Preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Interview Preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Post-Visa Support</span>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <Button className="mt-8" size="lg">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Our Office" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Popular Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive visa solutions tailored for Indian citizens with transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickServices.map((service, index) => (
              <div key={index} className="group bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{service.duration}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="px-8">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of Indians for our expertise and commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Serve Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Countries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert visa services for top international destinations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{country.flag}</div>
                <h3 className="font-semibold text-foreground mb-1">{country.name}</h3>
                <p className="text-xs text-muted-foreground">{country.visaTypes}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/countries">
              <Button variant="outline" size="lg" className="px-8">
                View All Countries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Real success stories from Indians who achieved their visa dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-primary-foreground/80">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-300 text-orange-300" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-3">"{testimonial.text}"</p>
                <div className="text-sm text-orange-300 font-medium">
                  ✓ {testimonial.country} Visa Approved
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="secondary" size="lg" className="px-8">
                Read All Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Visa Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance from our certified visa consultants. Book your free consultation today and take the first step towards your international dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91-9876543210
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-orange-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


import { Plane, GraduationCap, Briefcase, Building, Home, CheckCircle, ArrowRight, Clock, FileText, Users, Star, Shield, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Tourist Visa',
      shortDesc: 'Explore the world with hassle-free tourist visa assistance',
      description: 'Planning a vacation or want to explore new destinations? Our tourist visa services make your travel dreams come true. We handle all documentation, application processes, and provide expert guidance for tourist visas to popular destinations including USA, Europe, Australia, Canada, and more.',
      features: [
        'Complete documentation assistance',
        'Travel itinerary planning',
        'Embassy appointment booking',
        'Interview preparation (if required)',
        'Travel insurance guidance',
        'Post-visa travel support'
      ],
      countries: ['USA', 'Canada', 'Australia', 'UK', 'Schengen', 'Dubai'],
      processingTime: '7-21 days',
      successRate: '96%',
      startingPrice: '₹5,000',
      additionalInfo: 'Includes document checklist, application review, and embassy submission guidance'
    },
    {
      icon: GraduationCap,
      title: 'Student Visa',
      shortDesc: 'Study abroad with comprehensive student visa support',
      description: 'Pursue your academic dreams internationally with our expert student visa assistance. From university selection to visa approval, we guide you through every step of studying abroad. Our team helps with course selection, university applications, and visa documentation.',
      features: [
        'University selection guidance',
        'Course and program advice',
        'Admission application support',
        'Student visa documentation',
        'Financial documentation help',
        'Pre-departure guidance'
      ],
      countries: ['Canada', 'Australia', 'USA', 'UK', 'Germany', 'New Zealand'],
      processingTime: '4-8 weeks',
      successRate: '99%',
      startingPrice: '₹15,000',
      additionalInfo: 'Comprehensive package including SOP writing, university applications, and scholarship guidance'
    },
    {
      icon: Briefcase,
      title: 'Work Visa',
      shortDesc: 'Advance your career with international work opportunities',
      description: 'Take your career to the next level with international work opportunities. We assist professionals in securing work visas for various countries, helping you navigate the complex requirements and documentation needed for employment abroad.',
      features: [
        'Job market analysis',
        'Employer liaison support',
        'Work permit applications',
        'Labor market assessments',
        'Professional qualification recognition',
        'Family dependent visas'
      ],
      countries: ['Canada', 'Australia', 'Germany', 'UK', 'Singapore', 'UAE'],
      processingTime: '6-12 weeks',
      successRate: '94%',
      startingPrice: '₹20,000',
      additionalInfo: 'Includes job search assistance, employer documentation, and family visa guidance'
    },
    {
      icon: Building,
      title: 'Business Visa',
      shortDesc: 'Expand your business horizons globally',
      description: 'Expand your business internationally or explore investment opportunities abroad. Our business visa services cater to entrepreneurs, investors, and business professionals looking to establish or expand their presence in foreign markets.',
      features: [
        'Business plan evaluation',
        'Investment documentation',
        'Market entry guidance',
        'Business establishment support',
        'Investor visa applications',
        'Business meeting arrangements'
      ],
      countries: ['USA', 'Canada', 'Australia', 'UK', 'Singapore', 'Hong Kong'],
      processingTime: '4-10 weeks',
      successRate: '92%',
      startingPrice: '₹25,000',
      additionalInfo: 'Complete business immigration package with investment guidance and legal support'
    },
    {
      icon: Home,
      title: 'PR Assistance',
      shortDesc: 'Permanent residency and immigration solutions',
      description: 'Make your temporary stay permanent with our PR assistance services. We help you navigate the complex permanent residency processes, ensuring you have the best chance of securing long-term settlement in your chosen country.',
      features: [
        'Eligibility assessment',
        'Points calculation and optimization',
        'Expression of Interest (EOI)',
        'Provincial Nominee Programs',
        'Family sponsorship applications',
        'Citizenship preparation'
      ],
      countries: ['Canada', 'Australia', 'New Zealand', 'USA', 'Germany'],
      processingTime: '6-18 months',
      successRate: '89%',
      startingPrice: '₹30,000',
      additionalInfo: 'Comprehensive PR package with ongoing support until citizenship eligibility'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'Discuss your goals and assess your eligibility with our experts',
      duration: '30 minutes'
    },
    {
      step: '02',
      title: 'Documentation',
      description: 'Prepare and review all required documents with our checklist',
      duration: '1-2 weeks'
    },
    {
      step: '03',
      title: 'Application',
      description: 'Submit your application with expert guidance and review',
      duration: '2-3 days'
    },
    {
      step: '04',
      title: 'Follow-up',
      description: 'Track progress and provide regular updates on your application',
      duration: 'Ongoing'
    },
    {
      step: '05',
      title: 'Success',
      description: 'Celebrate your visa approval and receive next steps guidance',
      duration: 'Celebration!'
    }
  ];

  const additionalServices = [
    {
      title: 'Document Translation',
      description: 'Certified translation services for all official documents',
      price: '₹500 per page'
    },
    {
      title: 'Interview Coaching',
      description: 'Mock interviews and preparation for visa interviews',
      price: '₹3,000 per session'
    },
    {
      title: 'Express Processing',
      description: 'Fast-track your application with priority handling',
      price: '₹5,000 extra'
    },
    {
      title: 'Post-Visa Support',
      description: 'Guidance on travel, accommodation, and settling abroad',
      price: '₹2,000'
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: 'Money Back Guarantee',
      description: 'Full refund if visa is rejected due to our error'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: '3-point quality check for all applications'
    },
    {
      icon: HeartHandshake,
      title: 'Personal Commitment',
      description: 'Dedicated consultant for your entire journey'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-orange-300 mb-6">
              <Star className="h-6 w-6 fill-current" />
              <span className="text-lg font-medium">98% Success Rate - 15,000+ Happy Clients</span>
              <Star className="h-6 w-6 fill-current" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Visa Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive visa solutions tailored for Indian citizens. From tourist visas to permanent residency, we've got you covered with expert guidance and proven success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Visa Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional visa services with personalized attention and expert guidance
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-4 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground">{service.shortDesc}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm font-medium text-foreground">Processing</span>
                      </div>
                      <span className="text-lg font-semibold text-primary">{service.processingTime}</span>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm font-medium text-foreground">Success Rate</span>
                      </div>
                      <span className="text-lg font-semibold text-green-500">{service.successRate}</span>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="flex items-center mb-2">
                        <FileText className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm font-medium text-foreground">Starting at</span>
                      </div>
                      <span className="text-lg font-semibold text-orange-500">{service.startingPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-foreground">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Popular Countries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.countries.map((country, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-muted-foreground">
                      <strong>Package Details:</strong> {service.additionalInfo}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1">
                      Get Started - {service.startingPrice}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1469041797191-50ace28483c3' : index === 1 ? '1488590528505-98d2b5aba04b' : index === 2 ? '1486312338219-ce68d2c6f44d' : index === 3 ? '1498050108023-c5249f4df085' : '1581091226825-a6a2a5aee158'}`}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary">{service.successRate} Success</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your visa application with our premium add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="text-primary font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Guarantees
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Your success is our commitment - backed by our guarantees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <guarantee.icon className="h-12 w-12 text-orange-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{guarantee.title}</h3>
                <p className="text-primary-foreground/80">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Simple Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to make your visa application journey smooth and successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 z-0"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                <span className="text-xs text-primary font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Application?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and let our experts guide you through the visa process. No hidden charges, transparent pricing, and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              <Users className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-orange-600">
              <FileText className="mr-2 h-5 w-5" />
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

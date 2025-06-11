
import { Users, Award, Clock, Globe, CheckCircle, Target, Eye, Heart, Shield, Star, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const team = [
    {
      name: 'Rahul Mehta',
      position: 'Senior Visa Consultant',
      experience: '12+ Years Experience',
      specialization: 'Canada & Australia Visas',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      education: 'MBA, Immigration Law Certified',
      languages: 'Hindi, English, Punjabi'
    },
    {
      name: 'Priya Sharma',
      position: 'Immigration Expert',
      experience: '10+ Years Experience',
      specialization: 'Student & Work Visas',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
      education: 'Masters in International Relations',
      languages: 'Hindi, English, Gujarati'
    },
    {
      name: 'Vikash Kumar',
      position: 'Document Specialist',
      experience: '8+ Years Experience',
      specialization: 'Document Verification',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      education: 'Legal Studies, Documentation Expert',
      languages: 'Hindi, English, Bengali'
    },
    {
      name: 'Anita Gupta',
      position: 'Client Relations Manager',
      experience: '9+ Years Experience',
      specialization: 'Client Support & Follow-up',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      education: 'MBA in Customer Relations',
      languages: 'Hindi, English, Tamil'
    }
  ];

  const achievements = [
    { number: '15,000+', label: 'Successful Visa Applications' },
    { number: '98%', label: 'Success Rate' },
    { number: '50+', label: 'Countries Served' },
    { number: '14+', label: 'Years of Excellence' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make international travel and immigration accessible to every Indian by providing expert guidance, transparent processes, and personalized support throughout the visa journey.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be India\'s most trusted visa consultancy, recognized for our integrity, expertise, and commitment to helping Indians achieve their global aspirations.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, transparency, customer-centricity, and excellence in service delivery. We believe in building long-term relationships based on trust and successful outcomes.'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Founded in Delhi',
      description: 'Started as a small consultancy with a vision to help Indians travel abroad'
    },
    {
      year: '2013',
      title: 'First 1000 Visas',
      description: 'Achieved our first major milestone of 1000 successful visa applications'
    },
    {
      year: '2016',
      title: 'Expanded Services',
      description: 'Added PR assistance and business visa services to our portfolio'
    },
    {
      year: '2019',
      title: 'Digital Transformation',
      description: 'Launched online consultation and digital document management'
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Received "Best Visa Consultancy" award from Immigration Industry Council'
    },
    {
      year: '2024',
      title: '15,000+ Success Stories',
      description: 'Continuing to help Indians achieve their international dreams'
    }
  ];

  const offices = [
    {
      city: 'New Delhi',
      address: '23 MG Road, Connaught Place, New Delhi - 110001',
      phone: '+91-9876543210',
      type: 'Head Office'
    },
    {
      city: 'Mumbai',
      address: '456 Linking Road, Bandra West, Mumbai - 400050',
      phone: '+91-9876543211',
      type: 'Branch Office'
    },
    {
      city: 'Bangalore',
      address: '789 Brigade Road, MG Road Area, Bangalore - 560001',
      phone: '+91-9876543212',
      type: 'Branch Office'
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
              <span className="text-lg font-medium">Since 2010 - India's Trusted Partner</span>
              <Star className="h-6 w-6 fill-current" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About VisaConsult.in
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your trusted partner in making international dreams come true. Since 2010, we have been helping Indians navigate the complex world of visa applications with expert guidance and personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in 2010 by a team of immigration experts, VisaConsult.in was born out of a simple vision: to make international travel and immigration accessible to every Indian family. What started as a small consultancy in Delhi has now grown into one of India's most trusted visa service providers.
                </p>
                <p className="text-lg leading-relaxed">
                  Over the years, we have helped more than 15,000 Indians achieve their dreams of studying abroad, finding better career opportunities, starting businesses internationally, or simply exploring the world. Our success rate of 98% speaks to our commitment to excellence and deep understanding of immigration processes.
                </p>
                <p className="text-lg leading-relaxed">
                  We understand that each visa application is not just paperwork – it represents someone's dreams, aspirations, and future. That's why we treat every client like family, providing personalized attention and support throughout their journey.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, with offices in Delhi, Mumbai, and Bangalore, we continue to expand our reach while maintaining the personal touch that has made us India's most trusted visa consultancy.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Our Office" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2010</div>
                  <div className="text-sm text-muted-foreground">Since</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <value.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our 14-year journey of excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-orange-300">{achievement.number}</div>
                <div className="text-primary-foreground/80">{achievement.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Shield className="h-12 w-12 text-orange-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Government Authorized</h3>
              <p className="text-primary-foreground/80">Licensed immigration consultancy with proper certifications</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Award className="h-12 w-12 text-orange-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Industry Recognition</h3>
              <p className="text-primary-foreground/80">Multiple awards for excellence in visa consultancy services</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <TrendingUp className="h-12 w-12 text-orange-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Growing Success</h3>
              <p className="text-primary-foreground/80">Continuously improving success rates and client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose VisaConsult.in?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What makes us different from other visa consultancies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Certified immigration consultants with years of experience in visa processes and documentation.'
              },
              {
                icon: Award,
                title: 'High Success Rate',
                description: '98% success rate in visa approvals, thanks to our thorough preparation and expert guidance.'
              },
              {
                icon: Clock,
                title: 'Fast Processing',
                description: 'Efficient document preparation and application submission to minimize processing time.'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Expertise in visa processes for 50+ countries across all continents.'
              },
              {
                icon: CheckCircle,
                title: 'Transparent Process',
                description: 'No hidden charges, clear communication, and regular updates throughout the process.'
              },
              {
                icon: Heart,
                title: 'Personal Touch',
                description: 'Individual attention to each case, understanding your unique needs and circumstances.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your visa success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.specialization}</p>
                  <div className="border-t pt-3 mt-3">
                    <p className="text-xs text-muted-foreground mb-1"><strong>Education:</strong> {member.education}</p>
                    <p className="text-xs text-muted-foreground"><strong>Languages:</strong> {member.languages}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at our convenient locations across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{office.city}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{office.type}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{office.address}</p>
                <p className="text-primary font-medium">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our 14+ years of experience work for you. Contact us today for a free consultation and start your visa journey with India's most trusted consultancy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              <Users className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-orange-600">
              Visit Our Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

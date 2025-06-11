
import { Star, Quote, MapPin, Calendar, Users, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ramesh Kumar Sharma',
      location: 'Mumbai, Maharashtra',
      country: 'Canada',
      visa: 'Express Entry - Permanent Residency',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      date: 'March 2024',
      testimonial: 'VisaConsult.in made my Canadian PR dream come true! Their team, especially Rahul sir, guided me through every step. The documentation process was smooth, and they prepared me well for all requirements. I am now settled in Toronto with my family. Highly recommended for anyone serious about immigration to Canada.',
      beforeStory: 'IT Professional with 8 years experience, was confused about eligibility and documentation',
      afterStory: 'Successfully immigrated to Canada and working as Senior Developer in Toronto'
    },
    {
      name: 'Anita Sharma Gupta',
      location: 'Delhi, NCR',
      country: 'Australia',
      visa: 'Student Visa - Masters in Engineering',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
      date: 'January 2024',
      testimonial: 'I was initially very nervous about studying abroad, but VisaConsult.in team made everything so easy. Priya madam helped me choose the right university and course. They handled all my documentation perfectly and even helped with accommodation guidance. Now I am pursuing my Masters at University of Melbourne. Thank you so much!',
      beforeStory: 'Engineering graduate wanting to pursue higher studies abroad but unsure about process',
      afterStory: 'Currently studying Masters in Engineering at University of Melbourne'
    },
    {
      name: 'Vikash Kumar Singh',
      location: 'Patna, Bihar',
      country: 'Germany',
      visa: 'EU Blue Card - Software Engineer',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      date: 'February 2024',
      testimonial: 'Outstanding service from VisaConsult.in! I got my German work visa within 3 months. The team understood my technical background and matched me with the right opportunities. Their preparation for the interview was excellent. Now I am working in Berlin as a Software Engineer. The entire process was transparent with no hidden costs.',
      beforeStory: 'Software engineer looking for better career opportunities in Europe',
      afterStory: 'Working as Senior Software Engineer in Berlin, Germany'
    },
    {
      name: 'Ravi Patel',
      location: 'Ahmedabad, Gujarat',
      country: 'United Kingdom',
      visa: 'Business Visa - Export Business',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      date: 'December 2023',
      testimonial: 'I needed to expand my textile business to UK markets. VisaConsult.in helped me get the business visa quickly and efficiently. They understood my business requirements and prepared all documentation accordingly. Their business visa expertise is remarkable. Now I have successful operations in London.',
      beforeStory: 'Textile business owner wanting to expand operations to UK market',
      afterStory: 'Successfully established business operations in London, UK'
    },
    {
      name: 'Priya Jain',
      location: 'Jaipur, Rajasthan',
      country: 'Canada',
      visa: 'Family Sponsorship',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      date: 'October 2023',
      testimonial: 'My husband was already in Canada and we were struggling with the family sponsorship process. VisaConsult.in team took over our case and handled everything professionally. They kept us updated throughout and made sure all documents were perfect. I joined my husband in Vancouver within 8 months. Excellent service!',
      beforeStory: 'Trying to join husband in Canada through family sponsorship, facing documentation issues',
      afterStory: 'Successfully reunited with family in Vancouver, Canada'
    },
    {
      name: 'Suresh Reddy',
      location: 'Hyderabad, Telangana',
      country: 'Australia',
      visa: 'Skilled Migration - Healthcare',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
      date: 'November 2023',
      testimonial: 'As a healthcare professional, I needed specialized guidance for Australian skilled migration. VisaConsult.in team understood the healthcare visa requirements perfectly. They helped with skill assessment, documentation, and state nomination. The process was smooth and I am now working as a Registered Nurse in Sydney.',
      beforeStory: 'Registered Nurse wanting to migrate to Australia for better career opportunities',
      afterStory: 'Working as Registered Nurse in Sydney, Australia with permanent residency'
    }
  ];

  const stats = [
    { icon: Users, number: '15,000+', label: 'Happy Clients' },
    { icon: Award, number: '98%', label: 'Success Rate' },
    { icon: MapPin, number: '50+', label: 'Countries Served' },
    { icon: Calendar, number: '14+', label: 'Years Experience' }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Real stories from real people who achieved their international dreams with our expert guidance. Join thousands of satisfied clients who trusted us with their visa journey.
            </p>
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Genuine reviews and success stories from Indians who achieved their visa goals with our help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      {testimonial.location}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.country} - {testimonial.visa}
                    </div>
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                <div className="border-t pt-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <span className="text-sm font-medium text-foreground">Before: </span>
                      <span className="text-sm text-muted-foreground">{testimonial.beforeStory}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-green-600">After: </span>
                      <span className="text-sm text-muted-foreground">{testimonial.afterStory}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-muted-foreground">
                      <Calendar className="inline h-3 w-3 mr-1" />
                      {testimonial.date}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      ✅ Verified Client
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Across All Visa Types
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our clients have succeeded in various visa categories across multiple countries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: 'Student Visas',
                count: '5,200+',
                countries: ['Canada', 'Australia', 'UK', 'Germany'],
                icon: '🎓'
              },
              {
                category: 'Work Visas',
                count: '4,800+',
                countries: ['Canada', 'Australia', 'Germany', 'UAE'],
                icon: '💼'
              },
              {
                category: 'PR Applications',
                count: '3,500+',
                countries: ['Canada', 'Australia', 'New Zealand'],
                icon: '🏡'
              },
              {
                category: 'Tourist Visas',
                count: '1,500+',
                countries: ['USA', 'UK', 'Schengen', 'Australia'],
                icon: '✈️'
              }
            ].map((category, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{category.category}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{category.count}</div>
                <div className="space-y-1">
                  {category.countries.map((country, idx) => (
                    <span key={idx} className="block text-sm text-muted-foreground">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Ready to write your own success story? Book a free consultation today and let our experts guide you toward achieving your international dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              📞 Call: +91-9876543210
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              💬 Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

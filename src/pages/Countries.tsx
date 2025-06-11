
import { MapPin, Users, Plane, GraduationCap, Briefcase, Home, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Countries = () => {
  const countries = [
    {
      name: 'Canada',
      flag: '🇨🇦',
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56cd888',
      description: 'Known for its welcoming immigration policies, excellent healthcare, and high quality of life. Perfect for students, skilled workers, and families.',
      popularFor: ['Study', 'Work', 'PR', 'Business'],
      programs: [
        'Express Entry Program',
        'Provincial Nominee Program',
        'Study Permits',
        'Work Permits',
        'Family Sponsorship'
      ],
      facts: {
        population: '38 Million',
        language: 'English & French',
        currency: 'Canadian Dollar',
        climate: 'Continental'
      },
      successRate: '95%',
      avgProcessing: '6-8 months',
      clientTypes: [
        { type: 'Students', percentage: 40, icon: GraduationCap },
        { type: 'Skilled Workers', percentage: 35, icon: Briefcase },
        { type: 'Families', percentage: 25, icon: Home }
      ]
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      description: 'The land down under offers excellent education, career opportunities, and a laid-back lifestyle. High demand for skilled professionals.',
      popularFor: ['Study', 'Work', 'PR', 'Tourist'],
      programs: [
        'SkillSelect Program',
        'Student Visa Subclass 500',
        'Temporary Skill Shortage Visa',
        'Partner Visa',
        'Tourist Visa'
      ],
      facts: {
        population: '26 Million',
        language: 'English',
        currency: 'Australian Dollar',
        climate: 'Varied'
      },
      successRate: '92%',
      avgProcessing: '4-10 months',
      clientTypes: [
        { type: 'Students', percentage: 45, icon: GraduationCap },
        { type: 'Skilled Workers', percentage: 30, icon: Briefcase },
        { type: 'Tourists', percentage: 25, icon: Plane }
      ]
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
      description: 'Europe\'s economic powerhouse with excellent education system, strong job market, and rich cultural heritage. Growing destination for Indian professionals.',
      popularFor: ['Study', 'Work', 'Business', 'Research'],
      programs: [
        'EU Blue Card',
        'Student Visa',
        'Job Seeker Visa',
        'Business Visa',
        'Research Visa'
      ],
      facts: {
        population: '83 Million',
        language: 'German',
        currency: 'Euro',
        climate: 'Temperate'
      },
      successRate: '89%',
      avgProcessing: '3-6 months',
      clientTypes: [
        { type: 'Students', percentage: 50, icon: GraduationCap },
        { type: 'Professionals', percentage: 35, icon: Briefcase },
        { type: 'Researchers', percentage: 15, icon: Users }
      ]
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
      description: 'Home to world-renowned universities and historic cities. Strong ties with India and excellent opportunities for students and professionals.',
      popularFor: ['Study', 'Work', 'Business', 'Tourist'],
      programs: [
        'Student Visa',
        'Skilled Worker Visa',
        'Graduate Route',
        'Business Visa',
        'Visitor Visa'
      ],
      facts: {
        population: '67 Million',
        language: 'English',
        currency: 'British Pound',
        climate: 'Temperate Maritime'
      },
      successRate: '91%',
      avgProcessing: '3-8 weeks',
      clientTypes: [
        { type: 'Students', percentage: 55, icon: GraduationCap },
        { type: 'Workers', percentage: 25, icon: Briefcase },
        { type: 'Tourists', percentage: 20, icon: Plane }
      ]
    }
  ];

  const requirements = [
    {
      title: 'Documentation Required',
      items: [
        'Valid passport with minimum 6 months validity',
        'Educational certificates and transcripts',
        'Work experience certificates',
        'Language proficiency test scores (IELTS/TOEFL)',
        'Financial proof and bank statements',
        'Medical examination reports'
      ]
    },
    {
      title: 'Common Eligibility Criteria',
      items: [
        'Age requirements (varies by program)',
        'Educational qualification assessment',
        'Language proficiency requirements',
        'Work experience (for skilled worker programs)',
        'Financial capacity demonstration',
        'Health and character requirements'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Countries We Serve
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore popular destinations for Indian citizens. From study abroad to permanent residency, we help you navigate visa requirements for top countries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Top countries chosen by Indian citizens for education, career, and settlement
            </p>
          </div>

          <div className="space-y-16">
            {countries.map((country, index) => (
              <div key={index} className="bg-card rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Country Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={country.image} 
                      alt={country.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl">{country.flag}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm">Success Rate: {country.successRate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Country Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {country.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Popular For:</h4>
                          <div className="flex flex-wrap gap-2">
                            {country.popularFor.map((item, idx) => (
                              <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Key Programs:</h4>
                          <ul className="space-y-1">
                            {country.programs.map((program, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                                {program}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <div className="text-sm text-muted-foreground">Avg. Processing</div>
                            <div className="font-semibold text-foreground">{country.avgProcessing}</div>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <div className="text-sm text-muted-foreground">Success Rate</div>
                            <div className="font-semibold text-green-600">{country.successRate}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Country Facts:</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Population:</span>
                              <span className="text-foreground">{country.facts.population}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Language:</span>
                              <span className="text-foreground">{country.facts.language}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Currency:</span>
                              <span className="text-foreground">{country.facts.currency}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Climate:</span>
                              <span className="text-foreground">{country.facts.climate}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Our Clients:</h4>
                          <div className="space-y-3">
                            {country.clientTypes.map((client, idx) => (
                              <div key={idx} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <client.icon className="h-4 w-4 text-primary" />
                                  <span className="text-sm text-muted-foreground">{client.type}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-primary rounded-full"
                                      style={{ width: `${client.percentage}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium text-foreground">{client.percentage}%</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full" size="lg">
                          <MapPin className="mr-2 h-4 w-4" />
                          Explore {country.name} Options
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              General Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common requirements across different countries and visa types
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {requirements.map((req, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-6">{req.title}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose Your Destination
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Not sure which country is right for you? Our experts can help you choose the best destination based on your goals, qualifications, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
              <Users className="mr-2 h-5 w-5" />
              Get Country Assessment
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary">
              <MapPin className="mr-2 h-5 w-5" />
              Compare Countries
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countries;

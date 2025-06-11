
import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, FileText, Clock, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const categories = [
    {
      title: 'General Information',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is VisaConsult.in and how long have you been in business?',
          answer: 'VisaConsult.in is a leading Indian visa consultancy established in 2010. We have over 14 years of experience helping Indians achieve their international dreams through expert visa guidance and documentation support. We have successfully assisted over 15,000 clients with a 98% success rate.'
        },
        {
          question: 'Which countries do you provide visa services for?',
          answer: 'We provide comprehensive visa services for 50+ countries including popular destinations like Canada, Australia, USA, UK, Germany, New Zealand, Singapore, UAE, and European Schengen countries. Our expertise covers tourist, student, work, business visas, and permanent residency applications.'
        },
        {
          question: 'What makes VisaConsult.in different from other consultancies?',
          answer: 'Our key differentiators include: 14+ years of experience, 98% success rate, certified immigration consultants, transparent pricing with no hidden charges, personalized attention to each case, comprehensive post-visa support, and strong relationships with embassies and visa offices.'
        },
        {
          question: 'Do you guarantee visa approval?',
          answer: 'While we cannot guarantee visa approval as the final decision rests with immigration authorities, our 98% success rate demonstrates our expertise in preparing strong applications. We thoroughly assess your profile and only proceed when we are confident about the chances of success.'
        }
      ]
    },
    {
      title: 'Services & Process',
      icon: FileText,
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive visa services including: Tourist Visa assistance, Student Visa guidance, Work Visa applications, Business Visa support, Permanent Residency (PR) assistance, Document preparation and verification, Embassy appointment booking, Interview preparation, and Post-visa support services.'
        },
        {
          question: 'How does your consultation process work?',
          answer: 'Our process begins with a free consultation where we assess your profile and goals. Then we provide a detailed plan including documentation requirements, timeline, and fees. Once you decide to proceed, we handle all paperwork, applications, and follow-ups until visa approval.'
        },
        {
          question: 'What documents do I need for visa application?',
          answer: 'Document requirements vary by visa type and country. Generally needed: Valid passport, educational certificates, work experience letters, financial statements, medical reports, police clearance, language test scores (IELTS/TOEFL), and photographs. We provide a detailed checklist specific to your case.'
        },
        {
          question: 'Do you help with document preparation?',
          answer: 'Yes, we provide complete document preparation services including formatting, verification, attestation guidance, and ensuring all documents meet specific embassy requirements. We also help in obtaining missing documents and certificates.'
        }
      ]
    },
    {
      title: 'Fees & Payments',
      icon: Users,
      questions: [
        {
          question: 'What are your consultation fees?',
          answer: 'Initial consultation is completely FREE. During this session, we assess your profile, discuss your goals, and provide preliminary guidance. Our paid services start only when you decide to proceed with our professional assistance for your visa application.'
        },
        {
          question: 'What are your service charges?',
          answer: 'Our service fees vary based on visa type and complexity. We offer transparent pricing with no hidden charges. Fees typically range from ₹25,000 to ₹1,50,000 depending on the service. We provide detailed fee structure during consultation and payment can be made in installments.'
        },
        {
          question: 'Do you offer refunds if visa is rejected?',
          answer: 'Our service fees are for professional consultation and application preparation, not for visa approval guarantee. However, we have a transparent refund policy for specific circumstances. Details are discussed during the service agreement. Our high success rate minimizes such situations.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept multiple payment methods including bank transfers, online payments, UPI, credit/debit cards, and cash payments at our office. We also offer flexible payment plans where you can pay in installments based on application milestones.'
        }
      ]
    },
    {
      title: 'Timeline & Processing',
      icon: Clock,
      questions: [
        {
          question: 'How long does the visa process take?',
          answer: 'Processing times vary by country and visa type: Tourist visas: 7-21 days, Student visas: 4-8 weeks, Work visas: 6-12 weeks, Business visas: 4-10 weeks, PR applications: 6-18 months. We provide accurate timelines specific to your case during consultation.'
        },
        {
          question: 'Can you expedite the visa process?',
          answer: 'Some countries offer expedited processing for additional fees. We can explore fast-track options where available. However, most processing times are set by immigration authorities. We ensure your application is submitted optimally to avoid delays.'
        },
        {
          question: 'What happens if my visa application is delayed?',
          answer: 'We continuously monitor your application status and maintain regular communication with visa offices. If there are delays, we proactively follow up and keep you informed. We also provide guidance on any additional documents that might be requested.'
        },
        {
          question: 'When should I start my visa application process?',
          answer: 'We recommend starting 3-6 months before your intended travel/migration date. This allows sufficient time for document preparation, language tests (if required), application processing, and any unforeseen delays. Early planning increases success chances.'
        }
      ]
    },
    {
      title: 'Specific Visa Types',
      icon: FileText,
      questions: [
        {
          question: 'What are the requirements for Canadian PR?',
          answer: 'Canadian PR requirements include: Age 18-45 (optimal), Educational Credential Assessment (ECA), Language proficiency (IELTS/CELPIP), Work experience (skilled occupation), Proof of funds, Medical examination, Police clearance. Points are calculated under Express Entry system with minimum 67 points required.'
        },
        {
          question: 'How can I get a student visa for Australia?',
          answer: 'Australian student visa requirements: Genuine Temporary Entrant (GTE) statement, Enrollment in registered course, English proficiency (IELTS/TOEFL/PTE), Financial capacity proof, Health insurance (OSHC), Medical examination, Character requirements. We guide through university selection and application process.'
        },
        {
          question: 'What is the process for US tourist visa?',
          answer: 'US tourist visa (B1/B2) process: Complete DS-160 form, Pay visa fee, Schedule interview, Attend embassy interview, Provide supporting documents (financial proof, ties to India, travel itinerary). We help with documentation and interview preparation.'
        },
        {
          question: 'Can I apply for multiple country visas simultaneously?',
          answer: 'Yes, you can apply for multiple country visas simultaneously in most cases. However, some applications might require your original passport. We help coordinate multiple applications and advise on the best sequence to follow for optimal results.'
        }
      ]
    },
    {
      title: 'Post-Visa Support',
      icon: Users,
      questions: [
        {
          question: 'Do you provide support after visa approval?',
          answer: 'Yes, we provide comprehensive post-visa support including: Pre-departure guidance, Travel and accommodation assistance, Airport pickup arrangements, Initial settlement support, Banking and SIN/Tax number guidance, Job search assistance, and ongoing consultation for any immigration-related queries.'
        },
        {
          question: 'What if I face issues after reaching my destination country?',
          answer: 'We maintain ongoing relationships with our clients and provide continued support. Our team can guide you through common post-arrival challenges, connect you with local support networks, and help with any immigration-related issues that may arise.'
        },
        {
          question: 'Do you help with family immigration after I settle abroad?',
          answer: 'Absolutely! We assist with family reunification processes including spouse visas, dependent children visas, parent sponsorship, and other family immigration programs. Our ongoing relationship ensures we can help your family join you when eligible.'
        },
        {
          question: 'Can you help with citizenship applications later?',
          answer: 'Yes, we provide guidance for citizenship applications once you meet the residency requirements in your destination country. We help with application preparation, documentation, and citizenship test preparation where applicable.'
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Find answers to common questions about our visa services, processes, and requirements. Can't find what you're looking for? Contact our experts for personalized assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-white/10 border-white/30 text-white placeholder-white/70 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or browse through our categories below.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-8">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((item, itemIndex) => {
                      const globalIndex = categoryIndex * 100 + itemIndex;
                      return (
                        <div
                          key={itemIndex}
                          className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <button
                            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                            onClick={() => toggleItem(globalIndex)}
                          >
                            <span className="text-lg font-medium text-foreground pr-4">
                              {item.question}
                            </span>
                            {openItem === globalIndex ? (
                              <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            )}
                          </button>
                          
                          {openItem === globalIndex && (
                            <div className="px-6 pb-4">
                              <div className="text-muted-foreground leading-relaxed">
                                {item.answer}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our visa experts are ready to provide personalized answers to your specific questions. Get in touch for detailed guidance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Free Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Book a free session with our experts to discuss your specific case
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Get answers from certified immigration consultants
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                Get answers within 24 hours of your inquiry
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              📞 Call: +91-9876543210
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              💬 Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

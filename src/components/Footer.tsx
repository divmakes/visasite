
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              VisaConsult<span className="text-orange-400">.in</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for visa consultancy services. We help make your international dreams come true with expert guidance and personalized support.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-orange-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-orange-400 transition-colors">Our Services</Link></li>
              <li><Link to="/countries" className="text-primary-foreground/80 hover:text-orange-400 transition-colors">Countries We Serve</Link></li>
              <li><Link to="/testimonials" className="text-primary-foreground/80 hover:text-orange-400 transition-colors">Client Reviews</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/80 hover:text-orange-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Tourist Visa</li>
              <li className="text-primary-foreground/80">Student Visa</li>
              <li className="text-primary-foreground/80">Work Visa</li>
              <li className="text-primary-foreground/80">Business Visa</li>
              <li className="text-primary-foreground/80">PR Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">23 MG Road, Connaught Place, New Delhi, India - 110001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@visaconsult.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 VisaConsult.in. All rights reserved. | Trusted Indian Visa Consultancy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

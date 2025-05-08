
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-jpi-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-jpi-teal">Jhang Polytechnic Institute</h3>
            <p className="mb-4 text-gray-300">
              Empowering futures through technology & safety training in Jhang.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-jpi-blue transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-jpi-teal">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-jpi-teal">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              Opp. Raza Pharmacy, Near Nighat Medical Complex, Gojra Road, Jhang Sadar.
            </p>
            <p className="text-gray-300 mb-1">0333-6757551</p>
            <p className="text-gray-300">0310-6182227</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-jpi-teal">Opening Hours</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Jhang Polytechnic Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

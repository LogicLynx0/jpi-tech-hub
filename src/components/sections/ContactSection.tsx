
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle mx-auto">
            Get in touch with us for enrollments or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-jpi-teal/10 p-3 rounded-full text-jpi-teal">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-jpi-blue mb-2">Our Location</h3>
                  <p className="text-gray-700">
                    Opp. Raza Pharmacy, Near Nighat Medical Complex,<br />
                    Gojra Road, Jhang Sadar.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-jpi-teal/10 p-3 rounded-full text-jpi-teal">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-jpi-blue mb-2">Contact Numbers</h3>
                  <p className="text-gray-700 mb-1">0333-6757551</p>
                  <p className="text-gray-700">0310-6182227</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-jpi-teal/10 p-3 rounded-full text-jpi-teal">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-jpi-blue mb-2">Working Hours</h3>
                  <p className="text-gray-700 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700 mb-1">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md h-[300px]">
              <iframe
                title="JPI Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5725624749545!2d72.32090591514928!3d31.2975306635796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392198add915ceb7%3A0xd034cb19259538cd!2sJhang%20Sadar%2C%20Jhang%2C%20Pakistan!5e0!3m2!1sen!2s!4v1651245301704!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-jpi-blue mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jpi-blue focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jpi-blue focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jpi-blue focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jpi-blue focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

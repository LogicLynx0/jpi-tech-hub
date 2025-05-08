
const AboutSection = () => {
  const affiliations = [
    { name: "PSDA", description: "Pakistan Skill Development Authority" },
    { name: "NAVTCC", description: "National Vocational & Technical Training Commission" },
    { name: "PSDF", description: "Punjab Skills Development Fund" },
    { name: "TEVTA", description: "Technical Education & Vocational Training Authority" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle mx-auto">
            Learn about our mission and affiliations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-jpi-blue opacity-10 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
              alt="Students in classroom" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-jpi-blue">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Jhang Polytechnic Institute is a trusted name in vocational and technical education, offering government and private certifications in computer and safety courses. With a focus on practical skills and career readiness, we provide up-to-date training tailored to market needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated instructors bring real-world experience to the classroom, ensuring students gain the relevant knowledge and hands-on practice required to excel in their chosen fields. We are committed to creating a supportive learning environment that fosters innovation, critical thinking, and professional growth.
            </p>
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-jpi-blue mb-6">Our Affiliations</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {affiliations.map((affiliation) => (
                  <div 
                    key={affiliation.name}
                    className="bg-gray-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="font-bold text-jpi-blue text-xl mb-2">{affiliation.name}</div>
                    <p className="text-sm text-gray-600">{affiliation.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

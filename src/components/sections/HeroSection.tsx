
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-white to-blue-50"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-jpi-teal/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-jpi-blue leading-tight mb-6">
              Empowering Futures Through Technology & Safety Training
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Govt. & Private Certified Courses | PSDA, NAVTCC, PSDF, TEVTA Affiliated
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#courses"
                className="btn-primary text-center"
              >
                Explore Courses
              </a>
              
              <a 
                href="#contact"
                className="btn-secondary text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-jpi-orange opacity-10 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-jpi-teal opacity-10 rounded-full"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Students in tech classroom" 
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

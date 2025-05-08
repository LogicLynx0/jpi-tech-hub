
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Course {
  id: string;
  title: string;
  image: string;
  duration: string;
  keyPoints: string[];
  benefits: string[];
  type: 'government' | 'private';
}

const CoursesSection = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  
  const courses: Course[] = [
    {
      id: '1',
      title: 'Computer Applications',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      duration: '3 months',
      keyPoints: ['Basic computer operations', 'MS Office Suite', 'Internet usage', 'Email management'],
      benefits: ['Essential digital literacy skills', 'Increased employability', 'Professional document creation'],
      type: 'private'
    },
    {
      id: '2',
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      duration: '6 months',
      keyPoints: ['HTML/CSS', 'JavaScript', 'Responsive design', 'Basic backend concepts'],
      benefits: ['Create professional websites', 'High-demand skill set', 'Portfolio development'],
      type: 'private'
    },
    {
      id: '3',
      title: 'Safety Inspector',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      duration: '4 months',
      keyPoints: ['Workplace hazard identification', 'Safety regulations', 'Risk assessment', 'Emergency protocols'],
      benefits: ['Critical certification for industry', 'Improved workplace safety', 'Compliance knowledge'],
      type: 'private'
    },
    {
      id: '4',
      title: 'Graphics Motion Media',
      image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2',
      duration: '5 months',
      keyPoints: ['Animation principles', 'After Effects', 'Motion graphics', 'Video editing'],
      benefits: ['Create engaging visual content', 'Digital marketing skills', 'Creative portfolio'],
      type: 'private'
    },
    {
      id: '5',
      title: 'Graphics Print Media',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
      duration: '3 months',
      keyPoints: ['Adobe Photoshop', 'Adobe Illustrator', 'Print design principles', 'Layout design'],
      benefits: ['Design professional materials', 'Marketing collateral creation', 'Brand identity design'],
      type: 'private'
    },
    {
      id: '6',
      title: 'Virtual Assistant (Amazon)',
      image: 'https://images.unsplash.com/photo-1549650998-d58a9cf53b8b',
      duration: '2 months',
      keyPoints: ['Amazon marketplace knowledge', 'Customer service skills', 'Inventory management', 'Order processing'],
      benefits: ['Remote work opportunities', 'E-commerce expertise', 'Flexible career path'],
      type: 'private'
    },
    {
      id: '7',
      title: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
      duration: '3 months',
      keyPoints: ['Social media marketing', 'SEO basics', 'Content marketing', 'Analytics'],
      benefits: ['Market businesses online', 'High-demand skill set', 'Applicable across industries'],
      type: 'private'
    },
    {
      id: '8',
      title: 'Computer Applications',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      duration: '4 months',
      keyPoints: ['Advanced Office Suite', 'Data management', 'Professional document creation', 'Government certification'],
      benefits: ['Government recognized certification', 'Enhanced employability', 'Professional skills development'],
      type: 'government'
    },
    {
      id: '9',
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      duration: '8 months',
      keyPoints: ['Full stack development', 'Advanced frameworks', 'Database design', 'Project management'],
      benefits: ['Government recognized certification', 'Comprehensive skill development', 'Industry-ready training'],
      type: 'government'
    },
    {
      id: '10',
      title: 'Safety Inspector',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      duration: '6 months',
      keyPoints: ['Advanced safety protocols', 'Legal compliance', 'Industry standards', 'Site inspections'],
      benefits: ['Government recognized certification', 'Higher-level qualification', 'Career advancement'],
      type: 'government'
    },
    {
      id: '11',
      title: 'Graphics Motion Media',
      image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2',
      duration: '6 months',
      keyPoints: ['Advanced animation', '3D basics', 'Comprehensive video production', 'Industry workflows'],
      benefits: ['Government recognized certification', 'Higher qualification level', 'Professional portfolio'],
      type: 'government'
    },
    {
      id: '12',
      title: 'Graphics Print Media',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
      duration: '4 months',
      keyPoints: ['Advanced design techniques', 'Brand identity creation', 'Print production', 'Industry standards'],
      benefits: ['Government recognized certification', 'Professional-level training', 'Industry connections'],
      type: 'government'
    },
  ];

  const selectedCourse = courses.find(course => course.id === selectedCourseId);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle mx-auto">
            Discover our wide range of government and private certified courses
          </p>
        </div>

        <Tabs defaultValue="private" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-200">
              <TabsTrigger 
                value="private" 
                className="data-[state=active]:bg-jpi-blue data-[state=active]:text-white px-8"
              >
                Private Courses
              </TabsTrigger>
              <TabsTrigger 
                value="government" 
                className="data-[state=active]:bg-jpi-blue data-[state=active]:text-white px-8"
              >
                Government Courses
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="private" className="animate-fade-in mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses
                .filter(course => course.type === 'private')
                .map(course => (
                  <div 
                    key={course.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedCourseId(course.id)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-jpi-blue mb-2">{course.title}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Duration: {course.duration}</span>
                      </div>
                      <button 
                        className="w-full bg-jpi-teal text-white py-2 rounded-lg hover:bg-jpi-teal/90 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="government" className="animate-fade-in mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses
                .filter(course => course.type === 'government')
                .map(course => (
                  <div 
                    key={course.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedCourseId(course.id)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-jpi-blue mb-2">{course.title}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Duration: {course.duration}</span>
                      </div>
                      <button 
                        className="w-full bg-jpi-blue text-white py-2 rounded-lg hover:bg-jpi-blue/90 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Course Details Modal */}
      <Dialog open={!!selectedCourseId} onOpenChange={(open) => !open && setSelectedCourseId(null)}>
        {selectedCourse && (
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-jpi-blue">{selectedCourse.title}</DialogTitle>
              <DialogDescription>
                <span className="font-medium text-gray-700">
                  {selectedCourse.type === 'government' ? 'Government Certified' : 'Private Certification'} • {selectedCourse.duration}
                </span>
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              <img 
                src={selectedCourse.image} 
                alt={selectedCourse.title} 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-jpi-blue mb-2">What You'll Learn</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedCourse.keyPoints.map((point, idx) => (
                    <li key={idx} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-jpi-blue mb-2">Benefits</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedCourse.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className={`w-full py-3 rounded-lg text-white text-center block font-medium ${
                    selectedCourse.type === 'government' ? 'bg-jpi-blue hover:bg-jpi-blue/90' : 'bg-jpi-teal hover:bg-jpi-teal/90'
                  } transition-colors`}
                  onClick={() => setSelectedCourseId(null)}
                >
                  Enroll in this Course
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default CoursesSection;

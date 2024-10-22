import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Calendar } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Litte Explorers School Kenya</h1>
        <p className="text-xl text-gray-600">Empowering learners worldwide through accessible online education</p>
      </section>

      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8" style={{backgroundImage: "url('5 Tips for Teaching Remotely.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Learning Journey Today</h2>
            <p className="text-white mb-6">Explore our Japanese and German language courses</p>
            <Link to="/schedule" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">Schedule a Lesson</Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Grace Awiti?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <BookOpen size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Language Courses</h3>
            <p className="text-gray-600">Learn Japanese and German from expert instructors</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from native speakers and experienced educators</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Calendar size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Choose class times that fit your schedule</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Monitor your language learning journey</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Our Language Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['Japanese', 'German'].map((language, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={`https://source.unsplash.com/random/800x600?${language.toLowerCase()}`} alt={`${language} course`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{language} Language Course</h3>
                <p className="text-gray-600 mb-4">Master {language} with our comprehensive curriculum and interactive lessons.</p>
                <Link to="/schedule" className="text-blue-600 hover:text-blue-800">Schedule a Lesson →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
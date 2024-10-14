import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star } from 'lucide-react';

const courses = [
  { id: 1, title: 'Introduction to Web Development', category: 'Programming', rating: 4.8, students: 1500, duration: '8 weeks' },
  { id: 2, title: 'Digital Marketing Fundamentals', category: 'Marketing', rating: 4.6, students: 1200, duration: '6 weeks' },
  { id: 3, title: 'Data Science Essentials', category: 'Data Science', rating: 4.9, students: 2000, duration: '10 weeks' },
  { id: 4, title: 'Graphic Design for Beginners', category: 'Design', rating: 4.7, students: 800, duration: '5 weeks' },
  { id: 5, title: 'Business Management and Leadership', category: 'Business', rating: 4.5, students: 1800, duration: '12 weeks' },
  { id: 6, title: 'Mobile App Development with React Native', category: 'Programming', rating: 4.8, students: 1300, duration: '9 weeks' },
];

const CoursesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://source.unsplash.com/random/800x600?${course.category}`} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{course.category}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1" size={16} />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-gray-400 mr-1" size={16} />
                  <span>{course.students} students</span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="text-gray-400 mr-1" size={16} />
                <span>{course.duration}</span>
              </div>
              <Link to="/lesson" className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Enroll Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
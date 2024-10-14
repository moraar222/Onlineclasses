import React, { useState } from 'react';
import { useSchedule } from '../contexts/ScheduleContext';

const SchedulePage: React.FC = () => {
  const { lessons, addLesson, joinLesson } = useSchedule();
  const [newLesson, setNewLesson] = useState({ subject: 'Japanese', time: '' });
  const [studentName, setStudentName] = useState('');

  const handleAddLesson = (e: React.FormEvent) => {
    e.preventDefault();
    addLesson(newLesson as { subject: 'Japanese' | 'German'; time: string });
    setNewLesson({ subject: 'Japanese', time: '' });
  };

  const handleJoinLesson = (lessonId: string) => {
    if (studentName) {
      joinLesson(lessonId, studentName);
      setStudentName('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Class Schedule</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Lesson</h2>
        <form onSubmit={handleAddLesson} className="space-y-4">
          <div>
            <label className="block mb-2">Subject:</label>
            <select
              value={newLesson.subject}
              onChange={(e) => setNewLesson({ ...newLesson, subject: e.target.value as 'Japanese' | 'German' })}
              className="w-full p-2 border rounded"
            >
              <option value="Japanese">Japanese</option>
              <option value="German">German</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Time:</label>
            <input
              type="datetime-local"
              value={newLesson.time}
              onChange={(e) => setNewLesson({ ...newLesson, time: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Lesson
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Lessons</h2>
        {lessons.length === 0 ? (
          <p>No lessons scheduled yet.</p>
        ) : (
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">{lesson.subject} Lesson</h3>
                <p>Time: {new Date(lesson.time).toLocaleString()}</p>
                <p>Students: {lesson.students.length}</p>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="p-2 border rounded mr-2"
                  />
                  <button
                    onClick={() => handleJoinLesson(lesson.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Join Lesson
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
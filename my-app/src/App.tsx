import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import LessonPage from './pages/LessonPage';
import SchedulePage from './pages/SchedulePage';
import { ScheduleProvider } from './contexts/ScheduleContext';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';

function App() {
  return (
    <ScheduleProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/lesson" element={<LessonPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ScheduleProvider>
  );
}

export default App;
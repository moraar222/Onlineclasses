import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Lesson {
  id: string;
  subject: 'Japanese' | 'German';
  time: string;
  students: string[];
}

interface ScheduleContextType {
  lessons: Lesson[];
  addLesson: (lesson: Omit<Lesson, 'id' | 'students'>) => void;
  joinLesson: (lessonId: string, studentName: string) => void;
}

const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

export const useSchedule = () => {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error('useSchedule must be used within a ScheduleProvider');
  }
  return context;
};

export const ScheduleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const addLesson = (lesson: Omit<Lesson, 'id' | 'students'>) => {
    const newLesson = {
      ...lesson,
      id: Date.now().toString(),
      students: [],
    };
    setLessons([...lessons, newLesson]);
  };

  const joinLesson = (lessonId: string, studentName: string) => {
    setLessons(lessons.map(lesson =>
      lesson.id === lessonId
        ? { ...lesson, students: [...lesson.students, studentName] }
        : lesson
    ));
  };

  return (
    <ScheduleContext.Provider value={{ lessons, addLesson, joinLesson }}>
      {children}
    </ScheduleContext.Provider>
  );
};
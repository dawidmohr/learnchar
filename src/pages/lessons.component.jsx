/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lessonsMocked } from '../mock';
import CardQuiz from '../components/molecules/card-quiz/Card-quiz';


const WraperLessons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const WraperLesson = styled.div`
  margin:6px;
`;
const LessonsComponent = () => {
  const [lessons, setLessons] = useState([]);

  function getLessons() {
    setLessons(lessonsMocked);
  }

  useEffect(() => {
    getLessons();
  }, []);

  return (
    <>
      <h1 className="title">Lekcje</h1>
      <WraperLessons>
      {lessons.map((lesson) => {
        return (
          <WraperLesson key={lesson.id}>
          <Link to={`lessons/${lesson.id}`}>
            <CardQuiz  {...lesson} />
          </Link>
          </WraperLesson>
        );
      })}
      </WraperLessons>
    </>
  );


};

export default LessonsComponent;

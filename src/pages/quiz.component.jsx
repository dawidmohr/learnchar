import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../components/atoms/Button/Button';
import { quizMocked } from '../mock';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import CheckboxSingleSelect from '../components/organisms/CheckboxSingleSelect/CheckboxSingleSelect';

const WraperQuiz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px;
  margin: 70px auto 70px auto;
  border: rgb(2,0,36) solid 1px;
  border-radius: 40px;
  max-width: 300px;
`;

const QuizComponent = () => {
  const [quizAnswers, setAnswer] = useState(['']);

  // let { id } = useParams();
  // const [lessons, setLessons] = useState([]);
  // useEffect(() => {
  //   __getLessons();
  // }, []);
  
  // handle change in molecule
  function handleAnswerChange() {
    // eslint-disable-next-line react/no-this-in-sfc
    setAnswer((prev) => ({ ...prev, ...{ [this.question]: this.answer } }));
  }

  return (
    <>
      <Heading big>{quizMocked.name}</Heading>
      <Paragraph>{quizMocked.questions[0].question}</Paragraph>
      <WraperQuiz>
        <CheckboxSingleSelect
          questions={quizMocked.questions[0]}
          selectedItem={quizAnswers[0]}
          onChange={handleAnswerChange}
          question="0"
        />
      </WraperQuiz>
      <Button submit>Dalej</Button>
    </>
  );



  // function __getLessons(id) {
  //   setLessons(quizMocked);
  // }
};

export default QuizComponent;

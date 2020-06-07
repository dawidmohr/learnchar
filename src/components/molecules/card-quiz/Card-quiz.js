import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Wraper = styled.div`
  border-radius: 10px;
  box-shadow: -1px 1px 3px 0px rgba(0, 0, 0, 0.75);
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  color: white;
  background: rgb(2,0,36);

  justify-content: flex-start;
`;

const HeadingWraper = styled.div`
  padding: 24px 24px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAuthor = styled(Paragraph)`
  margin: auto 0 0 8px;
`;

const DescriptionWraper = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;


const DescriptionParagraph = styled(Paragraph)`
  margin: 0 0 0 8px;
  width: calc(100% - 108px);
`;

const CardQuiz = ({ name, author, description }) => {
  return (
    <Wraper>
        <HeadingWraper>
          <StyledHeading big> {name}</StyledHeading>
          <StyledAuthor small>{author}</StyledAuthor>
        </HeadingWraper>
        <DescriptionWraper>
          {/* <DescriptionImage></DescriptionImage> */}
          <DescriptionParagraph>{description}</DescriptionParagraph>
        </DescriptionWraper>
    </Wraper>
  );
};

export default CardQuiz;

CardQuiz.propTypes  = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
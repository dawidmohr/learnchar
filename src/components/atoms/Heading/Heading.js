import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ big }) => (big ? '32px' : '16px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export default Heading;

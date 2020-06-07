import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ big }) => (big ? '24px' :  '16px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export default Paragraph;

import styled from 'styled-components';
import { breakpoints } from 'theme/breakpoints';

const H3 = styled.h3`
  font-size: 2rem;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  border-bottom: 1px solid black;
  width: 100%;

  @media ${breakpoints.mobileL} {
    font-size: 2.5rem;
  }
`;

export default H3;

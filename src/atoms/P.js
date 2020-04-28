import styled from 'styled-components';
import { breakpoints } from 'theme/breakpoints';

const P = styled.p`
  font-size: 1.5rem;
  text-align: justify;
  margin: 10px;

  @media ${breakpoints.mobileL} {
    font-size: 2rem;
  }

  @media ${breakpoints.tablet} {
    width: 70%;
  }
`;

export default P;

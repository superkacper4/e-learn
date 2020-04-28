import styled from 'styled-components';
import { breakpoints } from 'theme/breakpoints';

const H2 = styled.h2`
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;

  @media ${breakpoints.mobileL} {
    font-size: 4rem;
  }
`;

export default H2;

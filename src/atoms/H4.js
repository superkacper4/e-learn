import styled from 'styled-components';
import { breakpoints } from 'theme/breakpoints';

const H4 = styled.h3`
  font-size: 1.8rem;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  width: 100%;

  @media ${breakpoints.mobileL} {
    font-size: 2.3rem;
  }
`;

export default H4;

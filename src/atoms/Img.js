import styled from 'styled-components';
import { breakpoints } from 'theme/breakpoints';

const Img = styled.img`
  width: 100%;
  @media ${breakpoints.tablet} {
    width: 60%;
    border: 1px solid black;
  }
`;

export default Img;

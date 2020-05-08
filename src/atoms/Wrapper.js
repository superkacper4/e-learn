import styled from 'styled-components';
import { breakpoints } from 'theme/breakpoints';

const Wrapper = styled.section`
  min-height: 90vh;
  margin-top: 10vh;
  padding: 0;
  background-color: #d6d6d6;
  display: flex;
  flex-wrap: wrap;

  @media ${breakpoints.laptop} {
    min-height: 95vh;
    margin-top: 5vh;
  }
`;

export default Wrapper;

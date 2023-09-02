import styled from "styled-components";
const Heading = styled.h1`
  font-size: 1.375rem;
  line-height: 1.9375rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[800]};
`;
export default Heading;

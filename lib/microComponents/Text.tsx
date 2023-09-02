import styled from "styled-components";

const Text = styled.span`
  font-size: 1.125rem;
  line-height: 1.375rem;
  height: 1.375rem;
  display: inline-block;
  color: ${(props) => props.theme.colors.gray[800]};
`;
export default Text;

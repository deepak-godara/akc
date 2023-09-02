import Heading from "@lib/microComponents/Heading";
import { ReactNode } from "react";
import styled from "styled-components";
const FormHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FormHeadingStyled = styled(Heading)``;
const LineDiv = styled.div`
  height: 0.125rem;
  background: ${(props) => props.theme.colors.gray[500]};
  flex-grow: 1;
  margin-left: 3.125rem;
`;
function FormHeadings({ children, ...props }: { children: ReactNode }) {
  return (
    <FormHeadingContainer {...props}>
      <FormHeadingStyled>{children}</FormHeadingStyled>
      <LineDiv />
    </FormHeadingContainer>
  );
}
export default FormHeadings;

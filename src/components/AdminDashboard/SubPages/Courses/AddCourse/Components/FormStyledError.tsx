import React, { ReactNode } from "react";
import { Formik } from "../main";
import styled from "styled-components";
import { FaTriangleExclamation } from "react-icons/fa6";

// styled-components----
interface containerPropType {
  $shouldDisplay: boolean;
}
const Container = styled.div<containerPropType>`
  font-size: 0.9rem;
  line-height: 18px;
  position: absolute;
  margin-left: 0.125rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.red[500]};
  transition: opacity 0.3s;
  font-weight: 600;
  opacity: ${(props) => (props.$shouldDisplay ? 1 : 0)};
  left: 0.5rem;
`;
const CautionIcon = styled(FaTriangleExclamation)`
  position: relative;
  top: 2px;
`;
// ---------------------

function FormStyledError({
  children,
  shouldDisplay,
  ...props
}: {
  children: ReactNode;
  shouldDisplay: boolean;
}) {
  return (
    <Container {...props} $shouldDisplay={shouldDisplay}>
      {" "}
      <CautionIcon />
      &nbsp;&nbsp;{children}
    </Container>
  );
}

export default FormStyledError;

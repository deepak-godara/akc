import React, { ReactNode } from "react";
import styled from "styled-components";

const Heading = styled.h2`
  font-weight: 700;
  font-family: ${(props) => props.theme.font.font};
  color: ${(props) => props.theme.colors.gray[800]};
  font-size: 1.8rem !important;
`;

function CustomHeading({ children, sx }: { children: ReactNode; sx?: Object }) {
  return <Heading style={sx}>{children}</Heading>;
}

export default CustomHeading;

import { ReactNode } from "react";
import styled from "styled-components";

// styled-components----
const Container = styled.thead`
  color: ${(props) => props.theme.colors.gray[600]};
  font-size: 1rem;
  line-height: 1.4375rem;
  font-weight: 700;
`;

// ---------------------

function TableHeader({ children, ...props }: { children: ReactNode }) {
  return <Container {...props}>{children}</Container>;
}

export default TableHeader;

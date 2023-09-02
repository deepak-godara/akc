import React, { ReactNode } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import styled from "styled-components";
import { Formik } from "../main";

// styled-components-----
interface FormErrorPropsType {
  $shouldDisplay: boolean;
}

const Container = styled.div<FormErrorPropsType>`
  font-size: 0.9rem;
  position: absolute;
  top: 5.5rem;
  left: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.red[500]};
  transition: opacity 0.3s;
  font-weight: 600;
  opacity: ${(props) => (props.$shouldDisplay ? 1 : 0)};
`;

//-----------------------
export default function FormError({
  name,
  formik,
  ...props
}: {
  name: string;
  formik: Formik;
}) {
  //@ts-ignore
  const shouldDisplayError = formik.touched[name] && formik.errors[name];
  const error = shouldDisplayError ? (
    <>
      <FaTriangleExclamation />
      {/* @ts-ignore */}
      &nbsp;&nbsp; {formik.errors[name]}
    </>
  ) : (
    <div></div>
  );
  return (
    <Container $shouldDisplay={shouldDisplayError} {...props}>
      {error}
    </Container>
  );
}

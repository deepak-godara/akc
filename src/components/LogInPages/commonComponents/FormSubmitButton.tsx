import React, { ComponentPropsWithRef, ReactNode } from "react";
import { FaArrowRightToBracket, FaSpinner } from "react-icons/fa6";
import styled, { keyframes } from "styled-components";

interface FormSubmitButtonStyleProps {
  $loading: boolean;
}
const FormSubmitButtonStyle = styled.button<FormSubmitButtonStyleProps>`
  border: none;
  margin-top: 2rem;
  height: 3.6rem;
  background: ${(props) =>
    props.$loading
      ? `${props.theme.colors.green[600]}99`
      : props.theme.colors.green[600]};
  border-radius: 16px;
  font-family: ${(props) => props.theme.font.font};
  font-size: 1.2rem;
  font-weight: 700;
  position: relative;
  color: white;
  cursor: pointer;
`;
const FormSubmitButtonIconContainer = styled.span`
  position: absolute;
  right: 2rem;
  top: 30%;
`;
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const LoadingSpinner = styled(FaSpinner)`
  animation: ${rotateAnimation} 1s linear infinite;
`;

function FormSubmitButton({
  children,
  loading,
  ...props
}: {
  children: ReactNode;
  loading: boolean;
}) {
  return (
    <FormSubmitButtonStyle $loading={loading} type="submit" {...props}>
      {children}
      <FormSubmitButtonIconContainer>
        {loading ? <LoadingSpinner /> : <FaArrowRightToBracket />}
      </FormSubmitButtonIconContainer>
    </FormSubmitButtonStyle>
  );
}

export default FormSubmitButton;

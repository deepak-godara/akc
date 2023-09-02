import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import { Formik } from "../main";
import Text from "@lib/microComponents/Text";
import FormError from "./FormError";
import { FaEuroSign } from "react-icons/fa6";
// styled-components----
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const InputLabel = styled.label`
  font-size: 1.125rem;
  line-height: 1.125rem;
`;
const InputContainer = styled.div`
  display: flex;
  margin-top: 0.625rem;
`;
const InputSignContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 0.625rem 0 0 0.625rem;
`;
const InputEuroSign = styled(FaEuroSign)`
  height: 1.125rem;
  width: 0.6875rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const Input = styled.input`
  background: ${(props) => props.theme.colors.gray[500]};
  min-width: 0;
  flex-grow: 1;
  padding: 0.6875rem 1.875rem;
  padding-left: 0.1875rem;
  border-radius: 0 0.625rem 0.625rem 0;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: ${(props) => props.theme.colors.gray[800]};
  &::placeholder {
    color: ${(props) => props.theme.colors.gray[600]};
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

//----------------------
interface FormInputWithEuroIconProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  formik: Formik;
  min: number;
  disabled?: boolean;
}

function FormInputWithEuroIcon({
  id,
  name,
  placeholder,
  label,
  formik,
  min,
  disabled,
  ...props
}: FormInputWithEuroIconProps) {
  return (
    <Container {...props}>
      <InputLabel htmlFor={id}>
        <Text>{label}</Text>
      </InputLabel>
      <InputContainer>
        <InputSignContainer>
          <InputEuroSign />
        </InputSignContainer>
        <Input
          {...formik.getFieldProps(name)}
          placeholder={placeholder}
          type="number"
          min={min}
          id={id}
          disabled={disabled}
        />
      </InputContainer>
      <FormError name={name} formik={formik} />
    </Container>
  );
}

export default FormInputWithEuroIcon;

import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import { Formik } from "../main";
import Text from "@lib/microComponents/Text";
import FormError from "./FormError";
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
const Input = styled.input`
  background: ${(props) => props.theme.colors.gray[500]};
  padding: 0.6875rem 1.875rem;
  border-radius: 0.625rem;
  margin-top: 0.625rem;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: ${(props) => props.theme.colors.gray[800]};
  &::placeholder {
    color: ${(props) => props.theme.colors.gray[600]};
  }
`;

//----------------------
interface FormTextInputProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  formik: Formik;
}

function FormTextInput({
  id,
  name,
  placeholder,
  label,
  formik,
  ...props
}: FormTextInputProps) {
  return (
    <Container {...props}>
      <InputLabel htmlFor={id}>
        <Text>{label}</Text>
      </InputLabel>
      <Input
        {...formik.getFieldProps(name)}
        placeholder={placeholder}
        type="text"
        id={id}
      />
      <FormError name={name} formik={formik} />
    </Container>
  );
}

export default FormTextInput;

import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import { Formik } from "../main";
import Text from "@lib/microComponents/Text";
import FormError from "./FormError";
import { FaAngleDown, FaSortDown, FaSortUp } from "react-icons/fa6";
// styled-components----
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
const InputLabel = styled.label`
  font-size: 1.125rem;
  line-height: 1.125rem;
`;
const InputContainer = styled.div`
  display: flex;
  margin-top: 0.625rem;
  width: 100%;
  align-items: center;
`;
const Input = styled.input`
  flex-grow: 1;
  min-width: 0;
  background: ${(props) => props.theme.colors.gray[500]};
  padding: 0.6875rem 1.875rem;
  padding-right: 0;
  border-radius: 0.625rem 0 0 0.625rem;
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

const ChangeButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.gray[500]};
  height: 100%;
  border-radius: 0 0.625rem 0.625rem 0;
  padding: 0 1.6875rem 0 1.25rem;
`;
const ChangeButton = styled.button`
  width: auto;
  padding: 0;
  background: ${(props) => props.theme.colors.gray[500]};
  height: auto;
  cursor: auto;
`;
const IncrementIcon = styled(FaSortUp)`
  color: ${(props) => props.theme.colors.gray[800]};
`;
const DecrementIcon = styled(FaSortDown)`
  color: ${(props) => props.theme.colors.gray[800]};
`;
//----------------------
interface FormNumberInputProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  formik: Formik;
  min: number;
  max: number;
}

function FormNumberInput({
  id,
  name,
  placeholder,
  label,
  formik,
  min,
  max,
  ...props
}: FormNumberInputProps) {
  function increaseValue() {
    const currentValue = formik.getFieldProps(name).value;
    if (currentValue) {
      formik.setFieldValue(name, formik.getFieldProps(name).value + 1);
    } else {
      formik.setFieldValue(name, 1);
    }
  }
  function decreaseValue() {
    const currentValue = formik.getFieldProps(name).value;
    if (currentValue && currentValue > 1) {
      formik.setFieldValue(name, formik.getFieldProps(name).value - 1);
    }
  }
  return (
    <Container {...props}>
      <InputLabel htmlFor={id}>
        <Text>{label}</Text>
      </InputLabel>
      <InputContainer>
        <Input
          {...formik.getFieldProps(name)}
          placeholder={placeholder}
          type="number"
          min={min}
          max={max}
          id={id}
        />
        <ChangeButtonsContainer>
          <ChangeButton type="button" onClick={increaseValue}>
            <IncrementIcon viewBox="-80 -170 450 350" height="10" width="20" />
          </ChangeButton>
          <ChangeButton type="button" onClick={decreaseValue}>
            <DecrementIcon viewBox="-80 350  450 350" height="10" width="20" />
          </ChangeButton>
        </ChangeButtonsContainer>
      </InputContainer>
      <FormError name={name} formik={formik} />
    </Container>
  );
}

export default FormNumberInput;

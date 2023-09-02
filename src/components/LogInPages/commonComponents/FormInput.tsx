import styled from "styled-components";

const FormInput = styled.input`
  margin-top: 1rem;
  border-radius: 10px;
  height: 3.5rem;
  outline: none;
  padding: 0rem 1rem;
  font-size: 1.1rem;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.gray[500]};
  font-family: ${(props) => props.theme.font.font};
  color: ${(props) => props.theme.colors.gray[800]};
  &::placeholder {
    font-family: ${(props) => props.theme.font.font};
    color: ${(props) => props.theme.colors.gray[600]};
  }
`;
export default FormInput;

import styled from "styled-components";
import { Formik } from "../../main";

// styled-components----

interface AvailableButtonsPropsType {
  $state: boolean;
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const Button = styled.button<AvailableButtonsPropsType>`
  width: 50%;
  height: 100%;
  line-height: 1.5625rem;
  font-size: 1.125rem;
  font-weight: 700;
`;
const TrueButton = styled(Button)`
  border-radius: 10px 0 0 10px;
  color: ${(props) =>
    props.$state ? "#ffffff" : props.theme.colors.gray[600]};
  background: ${(props) =>
    props.$state ? props.theme.colors.gray[600] : props.theme.colors.gray[500]};
`;
const FalseButton = styled(Button)`
  border-radius: 0 10px 10px 0;
  color: ${(props) =>
    !props.$state ? "#ffffff" : props.theme.colors.gray[600]};
  background: ${(props) =>
    !props.$state
      ? props.theme.colors.gray[600]
      : props.theme.colors.gray[500]};
`;
// ---------------------
interface BooleanSelectorProps {
  formik: Formik;
  name: string;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}
export default function BooleanSelector({
  formik,
  name,
  disabled = false,
  onChange = () => {},
  ...props
}: BooleanSelectorProps) {
  return (
    <Container {...props}>
      <TrueButton
        $state={formik.getFieldProps(name).value}
        onClick={() => {
          formik.setFieldValue(name, true);
          onChange(true);
        }}
        type="button"
        disabled={disabled}
      >
        Yes
      </TrueButton>
      <FalseButton
        $state={formik.getFieldProps(name).value}
        onClick={() => {
          formik.setFieldValue(name, false);
          onChange(false);
        }}
        type="button"
        disabled={disabled}
      >
        No
      </FalseButton>
    </Container>
  );
}

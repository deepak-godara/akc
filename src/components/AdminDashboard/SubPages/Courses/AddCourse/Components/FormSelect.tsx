import { useSelect } from "downshift";
import { IconType } from "react-icons";
import { FaAngleDown, FaAngleUp, FaRegCalendarDays } from "react-icons/fa6";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { Formik } from "../main";
import Text from "@lib/microComponents/Text";
import FormError from "./FormError";
import { isAction } from "@reduxjs/toolkit";
// start of styled-components
const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;
const SelectButtonContainer = styled.div`
  width: 100%;
`;
const SelectLabel = styled.label``;

interface SelectButtonPropTypes {
  $isActive: boolean;
}

const SelectButton = styled.div<SelectButtonPropTypes>`
  margin-top: 0.625rem;
  width: 100%;
  padding: 0.6563rem 1.25rem;
  background: ${(props) => props.theme.colors.gray[500]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => (props.$isActive ? "10px 10px 0 0" : "10px")};
  outline: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray[600]};
`;
const SelectButtonText = styled.span`
  line-height: 1.5625rem;
  font-size: 1.125rem;
  white-space: nowrap;
  overflow: hidden;
`;
const SelectButtonIconContainer = styled.div`
  width: 1.125rem;
  height: 1.125rem;
`;
const SelectButtonDownIcon = styled(FaAngleDown)`
  width: 1.125rem;
  height: 1.125rem;
  margin-left: 2rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const SelectButtonUpIcon = styled(FaAngleUp)`
  width: 1.125rem;
  height: 1.125rem;
  margin-left: 2rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
interface OptionsListPropsTyps {
  open: boolean;
}
const OptionsList = styled.ul<OptionsListPropsTyps>`
  width: 100%;
  position: absolute;
  right: 0;
  background: ${(props) => props.theme.colors.blue[700]};
  display: ${(props) => (props.open ? "block" : "none")};
  border-radius: 0 0 15px 15px;
  /* padding: 0.5rem 0rem; */
  /* margin-top: 0.3125rem; */
  max-height: 20rem;
  overflow-y: scroll;
  z-index: 1000;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;

// border-top: ${(props) => (props.index ? "1px solid green" : "none")};
const ListItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: left;
  color: #ffffff;
  transition: background 0.2s;
  transition: color 0.2s;
  line-height: 1.5625rem;
  font-size: 1.125rem;
  overflow-wrap: break-word;
  &:hover {
    background: ${(props) => props.theme.colors.gray[600]}cc;
    color: #ffffff;
  }
`;
// end of styled-components
export interface optionType {
  id: string;
  value: string;
}
function itemToString(item: any) {
  return item ? item.value : "";
}
function FormSelect({
  text,
  options,
  formik,
  name,
  id,
  label,
  ...props
}: {
  text: string;
  options: optionType[];
  formik: Formik;
  name: string;
  id: string;
  label: string;
}) {
  // calling useSelect Hook----
  const {
    isOpen,
    selectedItem,
    selectItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    getLabelProps,
  } = useSelect({
    items: options,
    itemToString,
    onSelectedItemChange: (changes) => {},
    onStateChange: (changes) => {
      formik.setFieldTouched(name, true);
      if (!changes.selectedItem) return;
      formik.setFieldValue(name, changes.selectedItem.id);
    },
  });
  //---------------------------
  useEffect(() => {
    const initiallySelecteditem = formik.getFieldProps(name).value;
    const findOption = (id: string) => {
      for (let item of options) {
        if (item.id === id) {
          return item;
        }
      }
    };
    if (initiallySelecteditem) {
      const option = findOption(initiallySelecteditem);
      if (option) {
        selectItem(option);
      }
    }
  }, [formik, options]);
  //@ts-ignore
  const shouldDisplayError = formik.touched[name] && formik.errors[name];
  //@ts-ignore
  const error = shouldDisplayError ? formik.errors[name] : "";
  return (
    <SelectContainer {...props}>
      <SelectButtonContainer>
        <SelectLabel {...getLabelProps()}>
          <Text>{label}</Text>
        </SelectLabel>
        <SelectButton $isActive={isOpen} {...getToggleButtonProps()}>
          <SelectButtonText>
            {selectedItem ? selectedItem.value : `— ${text}`}
          </SelectButtonText>
          {isOpen ? <SelectButtonUpIcon /> : <SelectButtonDownIcon />}
          <FormError name={name} formik={formik} />
        </SelectButton>
      </SelectButtonContainer>
      <OptionsList open={isOpen} {...getMenuProps()}>
        {isOpen &&
          options.map((item, index) => (
            <ListItem key={item.id} {...getItemProps({ item, index })}>
              <span>{item.value}</span>
            </ListItem>
          ))}
      </OptionsList>
    </SelectContainer>
  );
}

export default FormSelect;

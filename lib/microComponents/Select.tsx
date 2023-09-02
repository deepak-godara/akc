import { useSelect } from "downshift";
import { IconType } from "react-icons";
import {
  FaAngleDown,
  FaAngleUp,
  FaRegCalendarDays,
  FaSort,
} from "react-icons/fa6";
import styled from "styled-components";
import { useEffect, useState } from "react";

// start of styled-components
const SelectContainer = styled.div`
  position: relative;
`;
const SelectButtonContainer = styled.div``;
const SelectButton = styled.div`
  width: 23rem;
  padding: 0.6563rem 1.25rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.625rem;
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
const SortIcon = styled(FaSort)`
  width: 1.125rem;
  height: 1.125rem;
  margin-left: 2rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
interface OptionsListPropsTyps {
  open: boolean;
}
const OptionsList = styled.ul<OptionsListPropsTyps>`
  width: 23rem;
  position: absolute;
  right: 0;
  background: #ffffff;
  display: ${(props) => (props.open ? "block" : "none")};
  border-radius: 15px;
  padding: 0.5rem 0rem;
  margin-top: 0.3125rem;
  max-height: 20rem;
  overflow-y: scroll;
  box-shadow: 0px 0px 25px #00000040;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;

const ListItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: left;
  color: ${(props) => props.theme.colors.gray[700]};
  transition: background 0.2s;
  transition: color 0.2s;
  line-height: 1.5625rem;
  font-size: 1.125rem;
  overflow-wrap: break-word;
  &:hover {
    background: ${(props) => props.theme.colors.gray[600]};
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
function Select({
  text,
  onChange,
  options,
  reset,
  value,
  sort = false,
  removeHyphen = false,
  ...props
}: {
  text: string;
  onChange: (item: optionType | null | undefined) => void;
  reset?: boolean;
  value: optionType | undefined | null;
  sort?: boolean;
  removeHyphen?: boolean;
  options: optionType[];
}) {
  const [selectedItem, setSelectedItem] = useState<
    optionType | null | undefined
  >();
  const { isOpen, getToggleButtonProps, getMenuProps, getItemProps } =
    useSelect({
      onSelectedItemChange: (e) => {
        if (e.selectedItem && e.selectedItem.id === "-1") {
          onChange(undefined);
          setSelectedItem(undefined);
          return;
        }
        onChange(e.selectedItem);
        setSelectedItem(e.selectedItem);
      },
      items: [{ id: "-1", value: "" }, ...options],
      itemToString,
    });
  return (
    <SelectContainer {...props}>
      <SelectButtonContainer>
        <SelectButton {...getToggleButtonProps()}>
          <SelectButtonText>
            {value ? value.value : `${!removeHyphen ? "— " : ""}${text}`}
          </SelectButtonText>

          {!sort &&
            (isOpen ? <SelectButtonUpIcon /> : <SelectButtonDownIcon />)}
          {sort && <SortIcon />}
        </SelectButton>
      </SelectButtonContainer>
      <OptionsList open={isOpen} {...getMenuProps()}>
        {isOpen &&
          [{ id: "-1", value: `— ${text}` }, ...options].map((item, index) => (
            <ListItem
              key={`${item.id}.${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.value}</span>
            </ListItem>
          ))}
      </OptionsList>
    </SelectContainer>
  );
}

export default Select;

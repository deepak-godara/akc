import { useSelect } from "downshift";
import { IconType } from "react-icons";
import { FaAngleDown, FaAngleUp, FaRegCalendarDays } from "react-icons/fa6";
import styled from "styled-components";
import { useEffect, useState } from "react";

// start of styled-components
const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1.25rem;
  user-select: none;
`;
const SelectButtonContainer = styled.div``;
const SelectButton = styled.div`
  width: 100%;
  padding: 1.3125rem 1.875rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.625rem;
  outline: none;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.colors.gray[500]};
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
  z-index: 1000;
  position: absolute;
  right: 0;
  background: #ffffff;
  display: ${(props) => (props.open ? "block" : "none")};
  border-radius: 15px;
  margin-top: 0.3125rem;
  max-height: 20rem;
  overflow-y: scroll;
  background: ${(props) => props.theme.colors.blue[700]};
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
  ...props
}: {
  text: string;
  onChange: (item: optionType | null | undefined) => void;
  reset?: boolean;
  value: optionType | undefined | null;
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
            {value ? value.value : `— ${text}`}
          </SelectButtonText>

          {isOpen ? <SelectButtonUpIcon /> : <SelectButtonDownIcon />}
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

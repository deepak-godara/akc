import { useCombobox } from "downshift";
import { useEffect, useState } from "react";
import mockTeachersData from "@lib/testData/mockTeachersData";
import { styled } from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useTeacherOptions } from "@lib/hooks/useTeacherOptions";
import { Formik } from "../../main";
import { TEACHER } from "../../validationSchema";

// styled-components----
const Container = styled.div`
  position: relative;
`;
const SelectorContainer = styled.div`
  height: 2.9375rem;
`;
const Selector = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const SelectorInput = styled.input`
  flex-grow: 1;
  height: 100%;
  padding: 0.6875rem 1.875rem;
  padding-right: 0rem;
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 10px 0 0 10px;
  color: ${(props) => props.theme.colors.gray[800]};
  &::placeholder {
    color: ${(props) => props.theme.colors.gray[600]};
    line-height: 1.5625rem;
    font-size: 1.125rem;
  }
`;
const SelectorButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  border-radius: 0 10px 10px 0;
  background: ${(props) => props.theme.colors.gray[500]};
`;
const ArrowDown = styled(FaAngleDown)``;
const ArrowUp = styled(FaAngleUp)``;
interface OptionsListPropsType {
  $isOpen: boolean;
}
const OptionsList = styled.ul<OptionsListPropsType>`
  width: 100%;
  position: absolute;
  top: 3.25rem;
  padding: 0.5rem;
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 20px;
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  max-height: 20rem;
  overflow: scroll;
`;
interface OptionProps {
  $highlighted: boolean;
  $isFirst?: boolean;
  $selected?: boolean;
}
const Option = styled.li<OptionProps>`
  margin-top: ${(props) => (props.$isFirst ? "0" : "0.5rem")};
  cursor: pointer;
  border-radius: 12px;
  padding: 1rem;
  background: ${(props) => {
    if (props.$selected) return props.theme.colors.green[600];
    if (props.$highlighted)
      return "transparent linear-gradient(90deg, #4883C4 0%, #1B67BC 100%) 0% 0% no-repeat padding-box";
    return "#ffffff";
  }};
  color: ${(props) => {
    if (props.$selected) return "#ffffff";
    if (props.$highlighted) return "#ffffff";
    return (props) => props.theme.colors.gray[800];
  }};
  cursor: ${(props) => (props.$selected ? "default" : "pointer")};
`;
const OptionHeading = styled.div<OptionProps>`
  font-weight: 700;
`;
const OptionDescription = styled.div<OptionProps>`
  margin-top: 0.2rem;
`;
//----------------------
export interface TeacherOptionType {
  name: string;
  description: string;
  id: string;
  image: string;
}
function getBooksFilter(
  inputValue: string
): (teacher: TeacherOptionType) => boolean {
  const lowerCasedInputValue = inputValue.toLowerCase();
  return function booksFilter(teacher: TeacherOptionType): boolean {
    return (
      !inputValue ||
      teacher.name.toLowerCase().includes(lowerCasedInputValue) ||
      teacher.description.toLowerCase().includes(lowerCasedInputValue)
    );
  };
}

function ComboBox({
  onChange,
  formik,
}: {
  formik: Formik;
  onChange: (e: TeacherOptionType | undefined | null) => void;
}) {
  const TeachersData = useTeacherOptions();
  const [items, setItems] = useState<TeacherOptionType[]>(TeachersData);
  const [selectedItem, setSelectedItem] = useState<TeacherOptionType | null>(
    null
  );
  useEffect(() => {
    setItems(TeachersData);
  }, [TeachersData]);
  const {
    isOpen,
    getToggleButtonProps,
    selectItem,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      if (inputValue === undefined) return;
      setItems(TeachersData.filter(getBooksFilter(inputValue)));
    },
    onSelectedItemChange(e) {
      if (!e.selectedItem) return;
      setSelectedItem(e.selectedItem);
      onChange(e.selectedItem);
    },
    items,
    itemToString(item) {
      return item ? item.name : "";
    },
  });
  useEffect(() => {
    const initiallySelecteditem = formik.getFieldProps(TEACHER).value;
    const findOption = (id: string) => {
      for (let item of items) {
        if (item.id === id) {
          return item;
        }
      }
    };
    if (initiallySelecteditem) {
      const option = findOption(initiallySelecteditem.id);
      if (option) {
        selectItem(option);
      }
    }
  }, [formik, items]);
  return (
    <Container>
      <SelectorContainer>
        <Selector>
          <SelectorInput placeholder="Select A Teacher" {...getInputProps()} />
          <SelectorButton
            aria-label="toggle menu"
            type="button"
            {...getToggleButtonProps()}
          >
            {isOpen ? <ArrowUp /> : <ArrowDown />}
          </SelectorButton>
        </Selector>
      </SelectorContainer>
      <OptionsList $isOpen={isOpen} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => {
            return (
              <Option
                $isFirst={index === 0}
                $highlighted={highlightedIndex === index}
                $selected={
                  selectedItem
                    ? selectedItem.id === item.id
                      ? true
                      : false
                    : false
                }
                key={`${item.name}${index}`}
                {...getItemProps({ item, index })}
              >
                <OptionHeading $highlighted={highlightedIndex === index}>
                  {item.name}
                </OptionHeading>
                <OptionDescription $highlighted={highlightedIndex === index}>
                  {item.description}
                </OptionDescription>
              </Option>
            );
          })}
      </OptionsList>
    </Container>
  );
}

export default ComboBox;

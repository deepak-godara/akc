import styled from "styled-components";
import Select, { optionType } from "@lib/microComponents/Select";
import Search from "@lib/microComponents/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StudentDataType } from "@lib/testData/mockStudentsData";
import mockStudentsData from "@lib/testData/mockStudentsData";
import StudentTable from "./StudentTable";
// styled-components----
const Container = styled.div``;
const OrdersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const OrdersHeading = styled.h2`
  line-height: 1.9375rem;
  font-size: 1.375rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[800]};
  align-self: last baseline;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSelect = styled(Select)`
  margin-left: 1.25rem;
`;
const StyledSearch = styled(Search)`
  margin-left: 1.25rem;
`;

const StudentsTableContainer = styled.div`
  margin-top: 1.875rem;
`;

// ---------------------

function StudentsView() {
  const [university, setUniversity] = useState<optionType | null>();
  const [study, setStudy] = useState<optionType | null>();
  function makeUniversitySelectorOptionsFromItems(items: StudentDataType[]) {
    const options: optionType[] = [];
    for (let i = 0; i < items.length; i++) {
      options.push({ id: items[i].universityId, value: items[i].university });
    }
    return options;
  }
  function makeStudySelectorOptionsFromItems(
    items: StudentDataType[],
    university: optionType | undefined | null
  ) {
    const options: optionType[] = [];
    for (let i = 0; i < items.length; i++) {
      const option = { id: items[i].universityId, value: items[i].study };
      if (!university) {
        options.push(option);
      } else {
        university.id === items[i].universityId && options.push(option);
      }
    }
    return options;
  }
  function getFilterForItems(
    university: optionType | undefined | null,
    study: optionType | undefined | null
  ) {
    function universityFilter(item: StudentDataType) {
      if (!university) return true;
      return item.universityId === university.id;
    }
    function studyFilter(item: StudentDataType) {
      if (!study) return true;
      return item.study === study.value;
    }
    return function (item: StudentDataType) {
      return universityFilter(item) && studyFilter(item);
    };
  }
  return (
    <Container>
      <OrdersHeader>
        <OrdersHeading>Orders</OrdersHeading>
        <FilterContainer>
          <StyledSelect
            text="Select a university"
            onChange={(e) => {
              setUniversity(e);
              setStudy(undefined);
            }}
            value={university}
            options={makeUniversitySelectorOptionsFromItems(mockStudentsData)}
          />
          <StyledSelect
            text="Select a study"
            onChange={(e) => {
              setStudy(e);
            }}
            value={study}
            options={makeStudySelectorOptionsFromItems(
              mockStudentsData,
              university
            )}
          />
          <StyledSearch placeholder="Search in courses" />
        </FilterContainer>
      </OrdersHeader>
      <StudentsTableContainer>
        <StudentTable
          items={mockStudentsData.filter(getFilterForItems(university, study))}
        ></StudentTable>
      </StudentsTableContainer>
    </Container>
  );
}

export default StudentsView;

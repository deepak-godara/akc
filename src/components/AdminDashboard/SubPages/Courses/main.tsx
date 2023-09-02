import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select, { optionType } from "@lib/microComponents/Select";
import Search from "@lib/microComponents/Search";
import { Link } from "react-router-dom";
import CourseView from "./CourseView";
import { AdminCourseView } from "./CourseRenderer";
import { useUniversityOptions } from "@lib/hooks/useUniversityOptions";
import { useStudyOption } from "@lib/hooks/useStudyOptions";
import { getAdminCourseList } from "@API/services/Data/getAdminCourseList";
import { mapAPIAdminCourseViewToComponent } from "@lib/mapperFunctions/mapAPIAdminCourseViewToComponent";
import { ReactToast } from "@lib/toast";
// start of styled-components
const Container = styled.div``;
const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CourseHeading = styled.h2`
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
const AddCourseLink = styled(Link)`
  height: 2.875rem;
  width: 2.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.green[600]};
  color: #ffffff;
  margin-left: 1.25rem;
`;
const CourseListContainer = styled.div`
  margin-top: 1.875rem;
`;
// end of styled-components

function CoursesPage() {
  const universityOptions = useUniversityOptions();
  const studyOptions = useStudyOption();
  const [university, setUniversity] = useState<optionType | undefined | null>();
  const [study, setStudy] = useState<optionType | undefined | null>();
  const [courseList, setCourseList] = useState<AdminCourseView[]>([]);
  useEffect(() => {
    getCourseList();
  }, []);
  async function getCourseList() {
    const response = await getAdminCourseList();
    if (response.success) {
      const formattedData = response.data.map((item) =>
        mapAPIAdminCourseViewToComponent(item)
      );
      setCourseList(formattedData);
    } else {
      ReactToast("Could not get course list");
    }
  }
  // function makeSelectorOptionsFromItems(items: AdminCourseView[]) {
  //   const options: optionType[] = [];
  //   for (let i = 0; i < items.length; i++) {
  //     options.push({
  //       id: items[i].universityId.toString(),
  //       value: items[i].University,
  //     });
  //   }
  //   return options;
  // }
  // function makeStudySelectorOptionsFromItems(
  //   items: AdminCourseView[],
  //   university: optionType | undefined | null
  // ) {
  //   const options: optionType[] = [];
  //   for (let i = 0; i < items.length; i++) {
  //     const option = {
  //       id: items[i].universityId.toString(),
  //       value: items[i].subject,
  //     };
  //     if (!university) {
  //       options.push(option);
  //     } else {
  //       university.id === items[i].universityId.toString() &&
  //         options.push(option);
  //     }
  //   }
  //   return options;
  // }
  function getFilterForItems(
    university: optionType | undefined | null,
    study: optionType | undefined | null
  ) {
    function universityFilter(item: AdminCourseView) {
      if (!university) return true;
      return item.universityId.toString() === university.id;
    }
    function studyFilter(item: AdminCourseView) {
      if (!study) return true;
      return item.subject === study.value;
    }
    return function (item: AdminCourseView) {
      return universityFilter(item) && studyFilter(item);
    };
  }
  return (
    <Container>
      <CourseHeader>
        <CourseHeading>Courses</CourseHeading>
        <FilterContainer>
          <StyledSelect
            text="Select a university"
            onChange={(e) => {
              setUniversity(e);
              setStudy(undefined);
            }}
            value={university}
            options={universityOptions}
          />
          <StyledSelect
            text="Select a study"
            onChange={(e) => {
              setStudy(e);
            }}
            value={study}
            options={studyOptions}
          />
          <StyledSearch placeholder="Search in courses" />
          <AddCourseLink to="/admin-dashboard/courses/add-course">
            +
          </AddCourseLink>
        </FilterContainer>
      </CourseHeader>
      <CourseListContainer>
        <CourseView
          items={courseList.filter(getFilterForItems(university, study))}
        />
      </CourseListContainer>
    </Container>
  );
}

export default CoursesPage;

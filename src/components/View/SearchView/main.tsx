import { getCourseSearchList } from "@API/services/Search/getCourseSearchList";
import { searchSlice } from "@app/redux/slices/searchSlice";
import CallToSignIn from "@components/CommonComponents/CallToSignIn";
import NonEnrolledCourse from "@components/CommonComponents/CourseComponent/NonEnrolledCourse";
import {
  selectStudy,
  selectUniversity,
} from "@components/LandingPage/searchSelectors";
import {
  CourseSearch,
  CourseSearchList,
} from "@lib/Types/API/APICourseSearchList";
import { useStudyOption } from "@lib/hooks/useStudyOptions";
import { useUniversityOptions } from "@lib/hooks/useUniversityOptions";
import { mapCourseToUnenrolled } from "@lib/mapperFunctions/mapCourseToUnenrolled";
import Select, { optionType } from "@lib/microComponents/Select";
import { ReactToast } from "@lib/toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// styled-components----
const Container = styled.div`
  padding: 3.125rem;
  max-height: 100%;
  height: 100%;
  overflow-y: scroll;
`;
const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 1.25rem;
  margin-top: 3.125rem;
`;
const ControlsContainer = styled.div`
  margin-top: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeadingAndSelectContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 1.25rem;
  margin-left: 1.875rem;
`;
const Heading = styled.div`
  font-size: 1.375rem;
  line-height: 1.9375rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const SelectorStyled = styled(Select)``;
// ---------------------

const testOptions: optionType[] = [
  {
    id: "0",
    value: "opiton 1",
  },
  {
    id: "1",
    value: "option 2",
  },
];
function SearchView() {
  const dispatch = useDispatch();
  const universityOptions = useUniversityOptions();
  const studyOptions = useStudyOption();
  const university = useSelector(selectUniversity);
  const major = useSelector(selectStudy);
  const [year, setYear] = useState<optionType | null>();
  const [sort, setSort] = useState<optionType | null>();
  const [searchResults, setSearchResults] = useState<CourseSearch[]>([]);
  async function getSearchResult() {
    const universityId = university ? university.id : undefined;
    const study = major ? major.id : undefined;
    const grade = undefined;
    const data = await getCourseSearchList(universityId, study, grade);
    if (data.success) {
      setSearchResults(data.data);
    } else {
      ReactToast("Something went wrong");
    }
  }
  useEffect(() => {
    getSearchResult();
  }, [university, major, year]);
  return (
    <Container>
      <CallToSignIn />
      <ControlsContainer>
        <HeadingAndSelectContainer>
          <Heading>Courses</Heading>
          <SelectContainer>
            <SelectorStyled
              options={universityOptions}
              onChange={(e) => {
                dispatch(searchSlice.actions.setUniversity(e));
              }}
              text="University"
              value={university}
            />
            <SelectorStyled
              options={studyOptions}
              onChange={(e) => {
                dispatch(searchSlice.actions.setStudy(e));
              }}
              text="Major"
              value={major}
            />
            <SelectorStyled
              options={testOptions}
              onChange={(e) => {
                setYear(e);
              }}
              text="Year"
              value={year}
            />
          </SelectContainer>
        </HeadingAndSelectContainer>
        <SelectorStyled
          options={testOptions}
          onChange={() => {}}
          value={sort}
          text="Sort on"
          removeHyphen
          sort
        ></SelectorStyled>
      </ControlsContainer>
      <CoursesContainer>
        {searchResults.map((item) => (
          <NonEnrolledCourse item={mapCourseToUnenrolled(item)} />
        ))}
      </CoursesContainer>
    </Container>
  );
}

export default SearchView;

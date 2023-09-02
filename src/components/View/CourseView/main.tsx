import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CourseHeader from "./CourseHeader";
import CourseDetails from "./CourseDetails";
import mockCourseViewData from "@lib/testData/mockCourseViewData";
import CourseExtraInfo from "./CourseExtraInfo";
import CallToSignIn from "@components/CommonComponents/CallToSignIn";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseDetails } from "@API/services/Data/getCourseDetails";
import { mapAPICourseDetailsToComponent } from "@lib/mapperFunctions/mapAPICourseDetailsToComponent";
import { CourseDetailsType } from "./CourseDetailsType";
// styled-components----
const Container = styled.div`
  overflow-y: scroll;
  position: relative;
  height: calc(100vh - 5.1875rem);
  background: ${(props) => props.theme.colors.gray[500]};
`;
const CourseDetailsAndExtraInfoContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(62.5rem, 17fr) minmax(0, 656px);
  padding: 3.125rem;
  column-gap: 3.125rem;
`;
const CourseDetailsContainer = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 1.875rem;
  padding-bottom: 3.125rem;
`;
const CourseExtraInfoContainer = styled.div`
  border-radius: 20px;
  height: 50rem;
  max-width: 41rem;
`;
const CallToSignInContainer = styled.div`
  padding: 0 50px 70px 50px;
`;
// ---------------------

function CourseView() {
  const navigate = useNavigate();
  const [courseDetails, setCourseDetails] = useState<CourseDetailsType>();
  const { id } = useParams();
  if (!id) {
    navigate("/error");
    return;
  }
  useEffect(() => {
    fetchCourseDetails(id);
  }, []);
  async function fetchCourseDetails(id: string) {
    const data = await getCourseDetails(id);

    if (data.success) {
      const formattedData = mapAPICourseDetailsToComponent(data.data);
      setCourseDetails(formattedData);
    }
  }
  return courseDetails ? (
    <Container>
      <CourseHeader item={courseDetails} />
      <CourseDetailsAndExtraInfoContainer>
        <CourseDetailsContainer>
          <CourseDetails item={courseDetails} />
        </CourseDetailsContainer>
        <CourseExtraInfoContainer>
          <CourseExtraInfo item={courseDetails} />
        </CourseExtraInfoContainer>
      </CourseDetailsAndExtraInfoContainer>
      <CallToSignInContainer>
        <CallToSignIn />
      </CallToSignInContainer>
    </Container>
  ) : (
    <div>loading</div>
  );
}

export default CourseView;

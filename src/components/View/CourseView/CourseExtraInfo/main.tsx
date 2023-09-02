import React from "react";
import styled from "styled-components";
import SmartPoints from "./SmartPoints";
import CourseHelp from "./CourseHelp";
import CourseRatingComponent from "./CourseRatingComponent";
import { CourseDetailsType } from "../CourseDetailsType";

// styled-components----
const Container = styled.div``;
const EmptyContainer = styled.div`
  height: 21.3125rem;
  background: transparent linear-gradient(180deg, #a8bace 0%, #8fa7c1 100%) 0%
    0% no-repeat padding-box;
  border-radius: 20px;
`;
const Divider = styled.div`
  height: 0.125rem;
  background: ${(props) => props.theme.colors.gray[600]};
  opacity: 0.35;
  margin: 2rem 0;
`;
const CourseHelpAndRatingComponent = styled.div`
  padding: 0 1.875rem;
`;
// ---------------------

function CourseExtraInfo({ item }: { item: CourseDetailsType }) {
  return (
    <Container>
      <EmptyContainer />
      <SmartPoints />

      <CourseHelpAndRatingComponent>
        <CourseHelp />
        <Divider />
        <CourseRatingComponent item={item} />
      </CourseHelpAndRatingComponent>
    </Container>
  );
}

export default CourseExtraInfo;

import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { FaCircleCheck } from "react-icons/fa6";
import { CourseDetailsType } from "./CourseDetailsType";

// styled-components----
const Container = styled.div`
  margin-top: 2.375rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
`;
interface LeftContainerPropType {
  $showDivider: boolean;
}

const LeftContainer = styled.div<LeftContainerPropType>`
  padding: 0.625rem 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 0.875rem;
  border-right: ${(props) =>
    props.$showDivider
      ? `2px solid ${props.theme.colors.gray[600]}40`
      : "none"};

  color: ${(props) => props.theme.colors.gray[800]};
`;
const RightContainer = styled.div`
  padding: 0.625rem 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 0.875rem;
  color: ${(props) => props.theme.colors.gray[800]};
  padding-left: 2.5313rem;
`;
const VerticalDivider = styled.div`
  background: ${(props) => props.theme.colors.gray[600]};
  opacity: 0.25;
  width: 0.125rem;
`;
const CheckIcon = styled(FaCircleCheck)`
  min-width: 1.125rem;
  line-height: 1.5625rem;
  min-height: 1.125rem;
  color: ${(props) => props.theme.colors.blue[700]};
  margin-top: 6px;
`;
const FeaturesItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  word-wrap: break-word;
`;

const FeaturesItemText = styled.span`
  margin-left: 1.75rem;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  display: inline-block;
  word-wrap: break-word;
`;
const Divider = styled.div`
  height: 2px;
  background: ${(props) => props.theme.colors.gray[600]};
  opacity: 0.25;
`;
// ---------------------

function FeaturesItem({ children }: { children: ReactNode }) {
  return (
    <FeaturesItemContainer>
      <CheckIcon /> <FeaturesItemText>{children}</FeaturesItemText>
    </FeaturesItemContainer>
  );
}

function CourseFeatures({ item }: { item: CourseDetailsType }) {
  const [[firstArray, secondArray], setArrays] = useState<string[][]>(
    makeTwoArraysFromItems(item)
  );
  function makeTwoArraysFromItems(item: CourseDetailsType) {
    const firstArray = [];
    const secondArray = [];
    const values = Object.values(item.features);
    const length = Object.values(item.features).length;
    for (let i = 0; i < values.length; i++) {
      if (i % 2 === 0) {
        firstArray.push(values[i]);
      } else {
        secondArray.push(values[i]);
      }
    }
    return [firstArray, secondArray];
  }
  if (Object.values(item.features).length) {
    return (
      <>
        <Container>
          <LeftContainer $showDivider={!!secondArray.length}>
            {firstArray.map((e) => (
              <FeaturesItem>{e}</FeaturesItem>
            ))}
          </LeftContainer>

          <RightContainer>
            {secondArray.map((e) => (
              <FeaturesItem>{e}</FeaturesItem>
            ))}
          </RightContainer>
        </Container>
        <Divider style={{ marginTop: " 2.0938rem" }} />
      </>
    );
  }
  return <></>;
}

export default CourseFeatures;

import { ReactNode, useState } from "react";
import { FaAngleDown, FaBullseye } from "react-icons/fa6";
import styled from "styled-components";
import { FaCircleCheck } from "react-icons/fa6";

// styled-components----
const Container = styled.div`
  background: transparent linear-gradient(180deg, #a8bace 0%, #8fa7c1 100%) 0%
    0% no-repeat padding-box;
  border-radius: 20px;
`;
const ProfileStatusContainer = styled.div`
  padding: 1.875rem;
  color: #ffffff;
  max-width: 41rem;
`;
const ProfileStatusHeader = styled.div`
  display: flex;
`;
const ProfileStatusImageContainer = styled.div`
  height: 3.125rem;
  width: 3.125rem;
`;
const ProfileStatusImage = styled(FaBullseye)`
  height: 100%;
  width: 100%;
`;
const ProfileStatusHeaderTextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-left: 1.25rem;
`;
const ProfileStatusHeaderHeadingAndToggleButton = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
`;
const ProfileStatusHeaderPercentageIndicator = styled.div`
  font-size: 1rem;
  line-height: 1.4375rem;
  margin-top: 2.5px;
`;
const Divider = styled.div`
  height: 2px;
  background: ${(props) => props.theme.colors.gray[500]};
  opacity: 0.33;
  margin: 0 1.25rem;
`;
const StepsContainer = styled.div`
  padding: 1.875rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 1.25rem;
`;
const StepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
`;
const CheckIcon = styled(FaCircleCheck)`
  height: 1.125rem;
  width: 1.125rem;
  margin-right: 1.25rem;
`;
const StepPointsContainer = styled.div`
  width: 2.25rem;
  height: 1.3125rem;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.9375rem;
  background: #ffffff26;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
interface StepTextAndCheckButtonContainerPropsType {
  $completed: boolean;
}
const StepTextAndCheckButtonContainer = styled.div<StepTextAndCheckButtonContainerPropsType>`
  display: flex;
  align-items: center;
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
  opacity: ${(props) => (props.$completed ? "0.5" : "1")};
`;
// ---------------------
const Steps = function ({
  completed,
  children,
}: {
  completed: boolean;
  children: ReactNode;
}) {
  return (
    <StepContainer>
      <StepTextAndCheckButtonContainer $completed={completed}>
        <CheckIcon />
        {children}
      </StepTextAndCheckButtonContainer>
      <StepPointsContainer>+25</StepPointsContainer>
    </StepContainer>
  );
};
function ProfileStatus() {
  const [active, setActive] = useState<boolean>(true);
  return (
    <Container>
      <ProfileStatusContainer>
        <ProfileStatusHeader>
          <ProfileStatusImageContainer>
            <ProfileStatusImage />
          </ProfileStatusImageContainer>
          <ProfileStatusHeaderTextContainer>
            <ProfileStatusHeaderHeadingAndToggleButton>
              Complete your account <FaAngleDown />
            </ProfileStatusHeaderHeadingAndToggleButton>
            <ProfileStatusHeaderPercentageIndicator>
              75% completed&nbsp;&#x2022;&nbsp;25 points per task
            </ProfileStatusHeaderPercentageIndicator>
          </ProfileStatusHeaderTextContainer>
        </ProfileStatusHeader>
      </ProfileStatusContainer>
      {active && (
        <>
          <Divider />
          <StepsContainer>
            <Steps completed={true}>Add your personal information</Steps>
            <Steps completed={true}>Add your study</Steps>
            <Steps completed={true}>Order your first course</Steps>
            <Steps completed={false}>Join your first course</Steps>
          </StepsContainer>
        </>
      )}
    </Container>
  );
}

export default ProfileStatus;

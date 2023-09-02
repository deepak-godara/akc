import { FaBullseye, FaAngleDown } from "react-icons/fa6";
import styled from "styled-components";

// styled-components----
const Container = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 1.875rem;
  background: transparent linear-gradient(90deg, #4883c4 0%, #1c69bd 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 20px;
  color: #ffffff;
`;
const SmartPointsIconContainer = styled.div`
  height: 3.125rem;
  width: 3.125rem;
`;
const SmartPointsIcon = styled(FaBullseye)`
  height: 100%;
  width: 100%;
`;
const SmartPointsHeadingAndInfoContainer = styled.div`
  margin-left: 1.25rem;
  flex-grow: 1;
  align-items: flex-end;
`;
const SmartPointsHeading = styled.div`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;
const SmartPointsInfo = styled.div`
  font-size: 1rem;
  line-height: 1.4375rem;
  margin-top: 2.5px;
`;
// ---------------------

function SmartPoints() {
  return (
    <Container>
      <SmartPointsIconContainer>
        <SmartPointsIcon />
      </SmartPointsIconContainer>
      <SmartPointsHeadingAndInfoContainer>
        <SmartPointsHeading>
          Earn 50 smart points with this course! <FaAngleDown />
        </SmartPointsHeading>
        <SmartPointsInfo>
          Save and earn smart points for free trainings & cool prices
        </SmartPointsInfo>
      </SmartPointsHeadingAndInfoContainer>
    </Container>
  );
}
export default SmartPoints;

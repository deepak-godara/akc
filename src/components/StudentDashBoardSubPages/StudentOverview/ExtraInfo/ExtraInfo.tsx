import { FaBullseye } from "react-icons/fa6";
import styled from "styled-components";
import ProfileStatus from "./ProfileStatus";

// styled-components----
const ExtraInfoContainer = styled.div``;

// ---------------------

function ExtraInfo() {
  return (
    <ExtraInfoContainer>
      <ProfileStatus />
    </ExtraInfoContainer>
  );
}

export default ExtraInfo;

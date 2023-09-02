import React from "react";
import CommonDashboard from "@components/CommonDashboard";
import StudentDashBoardNavigationArray from "./StudentDashBoardNavigationArray";
function StudentDashBoard() {
  return (
    <CommonDashboard
      DashBoardNavigationArray={StudentDashBoardNavigationArray}
    />
  );
}

export default StudentDashBoard;

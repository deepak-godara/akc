import DashBoardNavigationArray from "./AdminDashBoardNavigationArray";
import CommonDashboard from "@components/CommonDashboard";
function AdminDashBoard() {
  return (
    <CommonDashboard DashBoardNavigationArray={DashBoardNavigationArray} />
  );
}

export default AdminDashBoard;

import Layout from "./Layout";
import { DashBoardNavigationArrayItemType } from "./Types";
function AdminDashBoard({
  DashBoardNavigationArray,
}: {
  DashBoardNavigationArray: DashBoardNavigationArrayItemType[];
}) {
  return <Layout DashBoardNavigationArray={DashBoardNavigationArray} />;
}

export default AdminDashBoard;

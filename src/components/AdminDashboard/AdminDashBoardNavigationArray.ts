import { IconType } from "react-icons";
import {
  FaTableColumns,
  FaGraduationCap,
  FaBasketShopping,
  FaUser,
  FaGear,
} from "react-icons/fa6";
const DashBoardNavigationArray = [
  {
    id: 0,
    Icon: FaTableColumns,
    name: "Overview",
    link: "/admin-dashboard/overview",
  },
  {
    id: 1,
    Icon: FaGraduationCap,
    name: "Courses",
    link: "/admin-dashboard/courses",
  },
  {
    id: 2,
    Icon: FaBasketShopping,
    name: "Orders",
    link: "/admin-dashboard/orders",
  },
  {
    id: 3,
    Icon: FaUser,
    name: "Students",
    link: "/admin-dashboard/students",
  },
  {
    id: 4,
    Icon: FaGear,
    name: "Settings",
    link: "/admin-dashboard/settings",
  },
];

export default DashBoardNavigationArray;

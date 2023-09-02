import { IconType } from "react-icons";
import {
  FaTableColumns,
  FaGraduationCap,
  FaBasketShopping,
  FaUser,
  FaGear,
  FaComments,
} from "react-icons/fa6";
const StudentDashBoardNavigationArray = [
  {
    id: 0,
    Icon: FaTableColumns,
    name: "Overview",
    link: "/dashboard/overview",
  },
  {
    id: 1,
    Icon: FaGraduationCap,
    name: "Courses",
    link: "/dashboard/courses",
  },
  {
    id: 2,
    Icon: FaBasketShopping,
    name: "Orders",
    link: "/dashboard/orders",
  },
  {
    id: 3,
    Icon: FaUser,
    name: "Student Profile",
    link: "/dashboard/students",
  },
  {
    id: 4,
    Icon: FaComments,
    name: "Support",
    link: "/dashboard/settings",
  },
];

export default StudentDashBoardNavigationArray;

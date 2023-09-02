import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import AdminDashBoard from "@components/AdminDashboard";
import LandingPage from "@components/LandingPage";
import SignIn from "@components/LogInPages/SignIn";
import SignUp from "@components/LogInPages/SignUp";
import AdminOverview from "@components/AdminDashboard/SubPages/AdminOverview";
import Courses from "@components/AdminDashboard/SubPages/Courses";
import AddCourse from "@components/AdminDashboard/SubPages/Courses/AddCourse";
import Orders from "@components/AdminDashboard/SubPages/Orders";
import CourseView from "@components/View/CourseView";
import View from "@components/View";
import Settings from "@components/AdminDashboard/SubPages/Settings";
import Students from "@components/AdminDashboard/SubPages/Students";
import StudentDasboard from "@components/StudentDasboard";
import StudentOverview from "@components/StudentDashBoardSubPages/StudentOverview";
import StudentCourses from "@components/StudentDashBoardSubPages/Courses";
import SearchView from "@components/View/SearchView";
import FOURoFOUR from "@components/FOURoFOUR";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@app/redux/publicSelectors/userSelector";
import useLogin from "@app/hooks/useLogin";
import LoadingScreen from "@components/LoadingScreen";
import { UserRole, userSlice } from "@app/redux/slices/userSlice";
import Cookies from "js-cookie";
import { getUserProfile } from "@API/services/Data/getUserProfile";
import { mapAPidatatoUserInfo } from "@lib/mapperFunctions/mapAPidatatoUserInfo";
import { dashboardUri } from "@app/CONSTANTS";
const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  }, []);
  return <></>;
};

function OAuthHandlerComponent() {
  const [searchParams, _] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    login();
  }, []);
  const login = async () => {
    try {
      const token = searchParams.get("token");
      if (token) {
        Cookies.set("token", token);
        const userInfoRes = await getUserProfile();
        if (userInfoRes.success) {
          const formattedData = mapAPidatatoUserInfo(userInfoRes.data);
          dispatch(userSlice.actions.setUserInfo(formattedData));
          navigate("/signin");
        } else {
          navigate("/error");
        }
      } else {
        navigate("/error");
      }
    } catch (e) {
      navigate("/error");
    }
  };
  return <LoadingScreen />;
}

function AppRoutes() {
  const user = useSelector(selectUser);
  const [loading, login] = useLogin();
  return loading ? (
    <LoadingScreen />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/oauth/google"
          element={
            <OAuthHandlerComponent />
            // user.role === UserRole.ADMIN ? (
            //   <Redirect to="/admin-dashboard" />
            // ) : (
            //   <Redirect to="/dashboard" />
            // )
          }
        />
        <Route
          path="/signup"
          element={
            user.loggedIn ? (
              user.role === UserRole.ADMIN ? (
                <Redirect to="/admin-dashboard" />
              ) : (
                <Redirect to="/dashboard" />
              )
            ) : (
              <SignUp />
            )
          }
        />
        <Route
          path="/signin"
          element={
            user.loggedIn ? (
              user.role === UserRole.ADMIN ? (
                <Redirect to="/admin-dashboard" />
              ) : (
                <Redirect to="/dashboard" />
              )
            ) : (
              <SignIn />
            )
          }
        />
        <Route path="/view" element={<View />}>
          <Route path=":id/course" element={<CourseView />} />
          <Route path="search" element={<SearchView />} />
        </Route>
        <Route
          path="/admin-dashboard"
          element={
            user.loggedIn && user.role === UserRole.ADMIN ? (
              <AdminDashBoard />
            ) : (
              <Redirect to="/signin" />
            )
          }
        >
          <Route index element={<Redirect to="/admin-dashboard/overview" />} />
          <Route path="overview" element={<AdminOverview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/add-course" element={<AddCourse />} />
          <Route path="courses/:id/edit-course" element={<AddCourse />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
          <Route path="students" element={<Students />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            user.loggedIn && user.role === UserRole.STUDENT ? (
              <StudentDasboard />
            ) : (
              <Redirect to="/signin" />
            )
          }
        >
          <Route index element={<Redirect to="/dashboard/overview" />} />
          <Route path="overview" element={<StudentOverview />} />
          <Route path="courses" element={<StudentCourses />} />
        </Route>
        <Route path="/error" element={<FOURoFOUR />}></Route>
        <Route path="*" element={<FOURoFOUR />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

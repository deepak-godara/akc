import { BASEURI, FRONTEND_URI } from "../CONSTANTS";

export const urlFunctions = {
  loginUrl: () => `${BASEURI}/auth/login`,
  signupUrl: () => `${BASEURI}/auth/signup`,
  authenticateWithGoogle: () =>
    `${BASEURI}/oauth2/authorize/google?redirect_uri=${FRONTEND_URI}/oauth/google`,
  createCourse: () => `${BASEURI}/admin/courses/new`,
  editCourse: (id: string) => `${BASEURI}/admin/courses/${id}/edit`,
  getUniversityList: () => `${BASEURI}/data/public/university/list`,
  getStudyList: () => `${BASEURI}/data/public/study/list`,
  getGroupList: () => `${BASEURI}/data/public/group/list`,
  getTeachersList: () => `${BASEURI}/admin/teacher/list`,
  getSubjectList: () => `${BASEURI}/data/public/subject/list`,
  getEventType: () => `${BASEURI}/data/public/type/list`,
  getUserInfo: () => `${BASEURI}/user/me`,
  verifyToken: (token: string) => `${BASEURI}/user/verify?token=${token}`,
  getAdminCourseList: () => `${BASEURI}/admin/courses/list?offset=0&size=1000`,
  getAdminOverView: (period: number) =>
    `${BASEURI}/admin/overview?period=${period}days`,
  getSearchResult: (
    universityId?: string,
    studyId?: string,
    gradeId?: string
  ) => {
    const queries = [];
    if (universityId) {
      queries.push(["universityId", universityId]);
    }
    if (studyId) {
      queries.push(["studyId", studyId]);
    }
    if (gradeId) {
      queries.push(["gradeId", gradeId]);
    }
    let queryString = "";
    queries.map((item) => {
      queryString = queryString + `${item[0]}=${item[1]}&`;
    });
    return `${BASEURI}/search/course/?${queryString}`;
  },
  getCourseDetails: (id: string) => `${BASEURI}/public/courses/${id}`,
};

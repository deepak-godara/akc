import SampleUniversityImage from "@images/sample-university.png";
import { APICourseResponse } from "@lib/Types/API/APICourseResponse";
import SampleTeacherImage from "@images/demo-teacher-image.png";
import { CourseDetailsType } from "@components/View/CourseView/CourseDetailsType";
const mockCourseViewData: CourseDetailsType = {
  id: "ce543022-c602-42a4-a5ec-cd27bf063a2a",
  universityImage: SampleUniversityImage,
  university: "University of Groningen",
  type: "Digital Exam Training",
  major: "Psychology",
  subject: "Statistics 2",
  language: "Dutch",
  available: true,
  price: "135,00",
  salePrice: "119,00",
  courseDuration: "12 hours",
  courseFormat: "Digital course via Zoom",
  knowledgeGuideAvailable: true,
  features: {
    "1": "12 Extra hours of training",
    "2": "Specifically for RUG students",
    "3": "Join easy and efficiently via Zoom",
    "4": "Personal help",
    "5": "Knowledge guide included",
    "6": "Not passed? Next course for free",
  },
  questionnaires: {
    "What can you expect from this course?":
      "In this training you will be prepared for your Psychology Statistics 3 digital trainingsessions of 4 hours each and is given in English by Konstantin. In these 12 training hours you will be extensively supervised and well prepared for your exam.",
    "What can you expect from this course2?":
      "In this training you will be prepared for your Psychology Statistics 3 digital trainingsessions of 4 hours each and is given in English by Konstantin. In these 12 training hours you will be extensively supervised and well prepared for your exam.",
  },
  highlights: {
    "Not passed?":
      "Next course for free + unlimited use of AKC study mayerials",
  },
  teacher: {
    name: "Brigith",
    image: SampleTeacherImage,
    profile: {
      "1": "Graduated psychology at RUG",
      "2": "Scored an 8,7 on this exam",
    },
  },
  courseSchedules: [
    {
      id: 1,
      course: null,
      name: "Training 1",
      date: "2023-07-24",
      startTime: "16:30:00",
      endTime: "20:30:00",
      zoomMeetingLink: "create zoom meeting link from api",
    },
    {
      id: 2,
      course: null,
      name: "Training 2",
      date: "2023-07-26",
      startTime: "16:30:00",
      endTime: "20:30:00",
      zoomMeetingLink: "create zoom meeting link from api",
    },
    {
      id: 1,
      course: null,
      name: "Training 3",
      date: "2023-07-24",
      startTime: "16:30:00",
      endTime: "20:30:00",
      zoomMeetingLink: "create zoom meeting link from api",
    },
  ],
  rating: 4.1,
};

export default mockCourseViewData;

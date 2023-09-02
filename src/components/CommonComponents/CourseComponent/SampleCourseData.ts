import SampleImage from "@images/sample-university.png";
export interface CourseType {
  image: string;
  university: string;
  study: string;
  major: string;
  subject: string;
  language: string;
  available: boolean;
  lessions: Lession[];
  type: string;
}

export interface Lession {
  title: string;
  date: string;
  startTime: string;
  started: boolean;
  endTime: string;
}

const data: CourseType = {
  image: SampleImage,
  university: "University of Groningen",
  study: "Digital exam training",
  major: "Psychology",
  subject: "Biopsychology",
  language: "Dutch",
  available: true,
  type: "MASTERCLASS",
  lessions: [
    {
      title: "Lession 1",
      date: "18 August 2023",
      startTime: "23:00",
      started: true,
      endTime: "14:00",
    },
    {
      title: "Lession 2",
      date: "18 August 2023",
      startTime: "22:45",
      started: false,
      endTime: "14:00",
    },
    {
      title: "Lession 3",
      date: "22 August 2023",
      started: false,
      startTime: "10:00",
      endTime: "14:00",
    },
  ],
};
export default data;

export interface StudentDataType {
  firstName: string;
  lastName: string;
  university: string;
  study: string;
  universityId: string;
}
const universities = [
  { id: "1", name: "University of Oxford" },
  { id: "2", name: "University of Cambridge" },
  { id: "3", name: "Imperial College London" },
  { id: "4", name: "London School of Economics and Political Science" },
  { id: "5", name: "University College London" },
  { id: "6", name: "University of Edinburgh" },
  { id: "7", name: "University of Manchester" },
  { id: "8", name: "University of Warwick" },
  { id: "9", name: "University of Bristol" },
  { id: "10", name: "University of Glasgow" },
];

const studies = [
  "Computer Science",
  "Engineering",
  "Mathematics",
  "Physics",
  "Biology",
  "Business Administration",
  "Economics",
  "Psychology",
  "Art",
  "History",
];

const firstNames = [
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Isabella",
  "Sophia",
  "Mia",
  "Charlotte",
  "Amelia",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Taylor",
  "Jones",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Anderson",
];

function getRandomElement(arr: any[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateRandomStudent() {
  const selectedUniversity = getRandomElement(universities);
  return {
    firstName: getRandomElement(firstNames),
    lastName: getRandomElement(lastNames),
    university: selectedUniversity.name,
    universityId: selectedUniversity.id,
    study: getRandomElement(studies),
  };
}

const numberOfStudents = 10;
const randomStudentData: StudentDataType[] = [];

for (let i = 0; i < numberOfStudents; i++) {
  randomStudentData.push(generateRandomStudent());
}

export default randomStudentData;

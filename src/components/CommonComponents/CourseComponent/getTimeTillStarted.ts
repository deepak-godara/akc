const { parse, differenceInSeconds, format, add } = require("date-fns");

interface getTimeTillStartedType {
  startTime: string;
  date: string;
}
export default function getTimeTillStarted(params: getTimeTillStartedType) {
  const currentDate = new Date();
  const eventDate: Date = parse(params.date, "d MMMM yyyy", new Date());

  const startTime: Date = parse(params.startTime, "HH:mm", new Date());
  const eventDateTime: Date = add(eventDate, {
    hours: startTime.getHours(),
    minutes: startTime.getMinutes(),
  });
  const diff = differenceInSeconds(eventDateTime, currentDate);
  if (diff <= 0) {
    return "starting soon";
  } else {
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;
    return `${hours} : ${minutes} : ${seconds}`;
  }
}

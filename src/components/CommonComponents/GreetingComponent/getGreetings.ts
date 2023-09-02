export default function getGreetings() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greetingMessage;
  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = "Good Afternoon";
  } else {
    greetingMessage = "Good Evening";
  }
  return greetingMessage;
}

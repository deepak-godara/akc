import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "css-reset-and-normalize";
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import * as Sentry from "@sentry/react";
// font-import **
// import "@fontsource/poppins/100.css";
// import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
// import "@fontsource/poppins/800.css";
// import "@fontsource/poppins/900.css";
// font-import-end **
// standout logs-------

if (process.env.NODE_ENV === "production") {
  //sentry is used for reporting error on user end. the error should be reported to sentry only in production.
  Sentry.init({
    dsn: "https://454d1c46afc54a06a57c43eee92dc6be@o1009184.ingest.sentry.io/4505540553015296",
    integrations: [
      new Sentry.BrowserTracing({
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: ["localhost", "https:yourserver.io/api/"],
      }),
      new Sentry.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}

const rootDiv = document.getElementById("root")!;
const root = createRoot(rootDiv);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

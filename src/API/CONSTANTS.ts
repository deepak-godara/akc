// export const BASEURI = "http://localhost:8080";
// export const FRONTEND_URI = "http://localhost:3000";
// export const BASEURI = "https://akc-backend-api-0b7d89f0c1ac.herokuapp.com";
// export const FRONTEND_URI = "https://akc.pages.dev";

let BASEURI: string;
let FRONTEND_URI: string;
if (process.env.NODE_ENV === "production") {
  BASEURI = "https://akc-backend-api-0b7d89f0c1ac.herokuapp.com";
  FRONTEND_URI = "https://akc.pages.dev";
} else {
  BASEURI = "http://localhost:8080";
  FRONTEND_URI = "http://localhost:3000";
}
export { BASEURI, FRONTEND_URI };

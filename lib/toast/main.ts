import { toast, ToastContainer } from "react-toastify";
interface toastOptions {
  position: string;
}
export const ReactToast = (message: string, options?: toastOptions) => {
  toast(message);
};
export const ReactToastContainer = ToastContainer;

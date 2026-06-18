import { ToastContainer, Slide } from "react-toastify";

const AppToast = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition={Slide}
  />
);

export default AppToast;

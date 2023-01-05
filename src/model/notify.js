import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const timeout = 3000;

export const success = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { zIndex: "99999" },
  });
};

export const error = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { zIndex: "99999" },
  });
};

export const warn = (msg) => {
  toast.warn(msg, {
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { zIndex: "99999" },
  });
};

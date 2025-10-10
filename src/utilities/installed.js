import { Bounce, toast } from "react-toastify";

const getInstalled = () => {
  let installed = localStorage.getItem('installed');

  if (installed) {
    return JSON.parse(installed);
  } else {
    return [];
  }
};

const setInstalled = id => {
  let installed= getInstalled();

  if (installed.includes(id)) {
    toast.warn('Already install it', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  } else {
    installed.push(id);
    let installedStr = JSON.stringify(installed);
    localStorage.setItem('installed', installedStr);
  }
};

const removeInstalled = id => {
  let installed = getInstalled();

  let removeItem = installed.filter(data => data !== id);
  let installedStr = JSON.stringify(removeItem);
  localStorage.setItem('installed', installedStr);
};

export { setInstalled, getInstalled, removeInstalled };
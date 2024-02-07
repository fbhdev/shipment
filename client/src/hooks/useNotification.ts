
import {useState, useEffect} from "react";
import {IconDefinition} from "@fortawesome/pro-light-svg-icons";

export const useNotification = (delay: number = 3000) => {
  const [notification, setNotification] = useState<any>();

  const showNotification = (message: string, icon?: IconDefinition) => {
    setNotification({message, icon});
    const timeout = setTimeout(() => {
      setNotification(undefined);
    }, delay);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (notification) {
        setNotification(undefined);
      }
    };
  }, [notification]);

  return {notification, showNotification};
};

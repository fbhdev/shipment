
import {useEffect, useState} from "react";

export default function useMobile(): boolean {

  const [mobile, setMobile] = useState<boolean>(window.innerWidth < 1024);

  useEffect(() => {
      function resize(): void {
          setMobile(window.innerWidth < 1024);
      }

      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
  })

  return mobile;
}

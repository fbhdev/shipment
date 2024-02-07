
import {createContext} from "react";

export interface MobileContextInterface {
  mobile: boolean;
}

export const MobileContext = createContext<MobileContextInterface>({
  mobile: false
});



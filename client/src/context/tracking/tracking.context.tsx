import {createContext} from "react";

export interface TrackingContextInterface {
  tracking: string | undefined;
  setTracking: (value: string | undefined) => void;
}

export const TrackingContext = createContext<TrackingContextInterface>({
  tracking: undefined,
  setTracking: value => console.log(value)
});
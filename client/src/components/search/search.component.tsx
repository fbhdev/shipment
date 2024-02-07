import {useContext, useRef} from "react";
import {MobileContext} from "@/context/mobile/mobile.context.tsx";
import {Mobile, Desktop} from "./search.model.tsx";
import {Input} from "@/components/ui/input.tsx";
import { Button } from "../ui/button.tsx";
import {faMagnifyingGlass} from "@fortawesome/pro-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {TrackingContext} from "@/context/tracking/tracking.context.tsx";

export const Search = function () {

  const searchRef = useRef<HTMLInputElement>(null);
  const mobile = useContext(MobileContext);
  const {setTracking} = useContext(TrackingContext);

  const onSearch = async function (): Promise<void> {
    if (!searchRef.current || !searchRef.current.value) {
      return; // UX
    } else if (searchRef.current.value.trim().length !== 13) {
      console.log('wrong, has to be 13 digits'); // UX
    } else {
      setTracking(searchRef.current.value);
      onClear();
    }
  }

  const onClear = function(): void {
    if (!searchRef.current || !searchRef.current.value) {
      return;
    }
    searchRef.current.value = "";
  }

  return (
    <div className={mobile ? Mobile.PARENT : Desktop.PARENT}>
      <Input
        ref={searchRef}
        placeholder={"Enter Tracking Number"}/>
      <Button className={"flex items-center gap-3"} onClick={onSearch}>
        <span>{"Search"}</span>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </Button>
    </div>
  );
}
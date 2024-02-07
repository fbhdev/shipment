import {useContext} from "react";
import {MobileContext} from "@/context/mobile/mobile.context.tsx";
import {Desktop, HeaderModel, Mobile} from "./header.model.tsx";
import {TrackingContext} from "@/context/tracking/tracking.context.tsx";
import {faXmark} from "@fortawesome/pro-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Header = function (props: HeaderModel) {

  const {children} = props;

  const mobile = useContext(MobileContext);
  const {tracking, setTracking} = useContext(TrackingContext);

  const onClear = function (): void {
    setTracking(undefined);
  };

  return (
    <div className={mobile ? Mobile.PARENT : Desktop.PARENT}>
      <div className={"flex items-center gap-3"}>
        <span>{tracking}</span>
        <div
          className={"flex items-center justify-center aspect-square p-1 bg-slate-950 text-slate-50 rounded-md w-6 h-6 text-base cursor-pointer"}
          onClick={onClear}>
          <FontAwesomeIcon icon={faXmark}/>
        </div>
      </div>
      {children}
    </div>
  );
}
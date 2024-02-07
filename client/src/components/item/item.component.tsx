import {useContext} from "react";
import {MobileContext} from "@/context/mobile/mobile.context.tsx";
import {ItemModel, Desktop, Mobile} from "./item.model.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Item = function (props: ItemModel<string>) {

  const mobile = useContext(MobileContext);
  const {title, data, icon} = props;

  return (
    <div className={mobile ? Mobile.PARENT : Desktop.PARENT}>
      <div className={"flex items-center gap-1 font-thin"}>
        {icon && <FontAwesomeIcon icon={icon}/>}
        <span>{title}</span>
      </div>
      <div className={"flex items-center justify-center h-full font-bold text-3xl"}>
        <span>{data}</span>
      </div>
    </div>
  );
}

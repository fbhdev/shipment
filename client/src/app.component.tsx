import {Mobile, Desktop} from "./app.model.tsx";
import useMobile from "./hooks/useMobile.ts";
import {MobileContext} from "./context/mobile/mobile.context.tsx";
import {Search} from "@/components/search/search.component.tsx";
import {useState} from "react";
import {TrackingContext} from "./context/tracking/tracking.context.tsx";
import {Header} from "@/components/header/header.component.tsx";
import {Item} from "@/components/item/item.component.tsx";
import {useQuery} from "react-query";
import {GET} from "@/utils/requests.ts";
import {TrackingResponse} from "@/types/tracking.model.tsx";


export const App = function () {

  const mobile = useMobile();
  const [tracking, setTracking] = useState<string>();
  const [shipment, setShipment] = useState<TrackingResponse>();

  useQuery("SHIPMENT", async () => onShipment(), {
    enabled: tracking !== undefined
  });

  const onShipment = async function (): Promise<void> {
    const response = await GET(`http://localhost:8000/shipment/${tracking}/`);
    if (!response || !response.results || response.results.length === 0) {
      setShipment(undefined);
    } else {
      setShipment(response.results[0] as TrackingResponse)
    }
  }

  return (
    <MobileContext.Provider value={{mobile}}>
      <TrackingContext.Provider value={{tracking, setTracking}}>
        <div className={mobile ? Mobile.PARENT : Desktop.PARENT}>
          {tracking && (
            <Header>
              <Search/>
            </Header>
          )}
          <div className={"flex items-center justify-center h-full w-full p-6"}>
            {!tracking && <Search/>}
            {tracking && (
              <div
                style={{gridAutoRows: "auto"}}
                className="grid grid-cols-3 gap-6 p-6 items-center w-full">
                <div className="row-span-2">
                  <Item
                    title={"Tracking Number"}
                    data={tracking}/>
                </div>
                <div className="row-span-2">
                  <Item
                    title={"Last Seen"}
                    data={shipment?.data.trackings[0].events[0].occurrenceDatetime.split('T')[0] ?? 'No Data Available'}/>
                </div>
                <div className="row-span-2">
                  <Item
                    title={"Location"}
                    data={shipment?.data.trackings[0].events[0].location ?? 'No Data Available'}/>
                </div>
                <div className="col-span-3 row-start-3">
                  <Item
                    title={"Status"}
                    data={shipment?.data.trackings[0].events[0].status ?? 'No Data Available'}/>
                </div>
              </div>
            )}
          </div>
        </div>
      </TrackingContext.Provider>
    </MobileContext.Provider>
  );
}


import { IEvent, Object } from "fabric/fabric-impl";
import { ControlInfosBar } from "../../interfaces/implementations/ControlInfosBar";

class HandleSelectionUpdated {
  handle(event: IEvent) {
    const customEvent = event as ( IEvent & { selected: Object[] });
    const controlInfosBar = ControlInfosBar.getInstance();
    
    const { id, label, locations } = customEvent.selected[0].data;

    controlInfosBar.show();
    controlInfosBar.setInfos(id, label, locations);
  }
}

export { HandleSelectionUpdated };

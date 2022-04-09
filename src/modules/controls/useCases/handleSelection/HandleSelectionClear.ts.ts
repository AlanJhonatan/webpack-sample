import { IEvent } from "fabric/fabric-impl";
import { ControlInfosBar } from "../../interfaces/implementations/ControlInfosBar";

class HandleSelectionClear {
  handle(event: IEvent<Event>) {
    const controlInfosBar = ControlInfosBar.getInstance();

    controlInfosBar.clearInfos();
    controlInfosBar.hide();
  }
}

export { HandleSelectionClear };

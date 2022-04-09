import { IEvent } from "fabric/fabric-impl";
import { ControlInfosBar } from "../../../controls/interfaces/implementations/ControlInfosBar";
import { MainCanvas } from "../../infra/fabricjs/MainCanvas";
import { IElementData } from "../../shapes/RectElement";

class DetectIntersection {
  handle(event: IEvent): void {
    const mainCanvas = MainCanvas.getInstance().canvas;
    const controlInfosBar = ControlInfosBar.getInstance();
    
    const selectedObject = event.target;

    if(!selectedObject) {
      return;
    }
    
    const objects = mainCanvas.getObjects().filter(
      (obj) => (obj !== selectedObject) && (selectedObject.intersectsWithObject(obj))
    );

    if(!objects.length) {
      (selectedObject.data as IElementData).locations = []
      controlInfosBar.setInfos(
        selectedObject.data.id,
        selectedObject.data.label,
        selectedObject.data.locations,
      );
      return;
    }

    const lastObject = objects[objects.length - 1];
    
    const locationAlreadyExists = (selectedObject.data as IElementData)
      .locations
      .find(location => location.id === lastObject.data.id)

    if(locationAlreadyExists) {
      return;
    }

    lastObject.opacity = 0.7;

    (selectedObject.data as IElementData).locations.push(
      (lastObject.data as IElementData)
    )

    controlInfosBar.setInfos(
      selectedObject.data.id,
      selectedObject.data.label,
      selectedObject.data.locations,
    )
    
    // event.target?.intersectsWithObject(element) ? 0.7 : 1
  }
}

export { DetectIntersection };

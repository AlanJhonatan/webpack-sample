import { IEvent } from "fabric/fabric-impl";
import Swal from "sweetalert2";
import { MainCanvas } from "../../infra/fabricjs/MainCanvas";
import { RectElement } from "../../shapes/RectElement";

class HandleDoubleClick {
  async handle(event: IEvent<MouseEvent>): Promise<void> {
    const rectElement = new RectElement();
    const mainCanvas = MainCanvas.getInstance();

    const swal = await Swal.fire({
      title: 'Insert an location name',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
    });

    if(swal.isDismissed) {
      return;
    }

    const rect = rectElement.create({
      x: event.e.x,
      y: event.e.y,
      label: swal.value,
    });

    mainCanvas.canvas.add(rect);

    console.log(rect.data)
  }
}

export { HandleDoubleClick };

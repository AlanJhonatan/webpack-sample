import { IEvent } from "fabric/fabric-impl";
import Swal from "sweetalert2";
import { MainCanvas } from "../../infra/fabricjs/MainCanvas";
import { RectElement } from "../../shapes/RectElement";

class HandleDoubleClick {
  handle(event: IEvent<MouseEvent>) {
    const rectElement = new RectElement();
    const mainCanvas = MainCanvas.getInstance();

    console.log(event)

    const rect = rectElement.create({ x: event.e.x, y: event.e.y });

    mainCanvas.canvas.add(rect);

    
    

    Swal.fire({
      title: 'Insert an location name',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      preConfirm: (input) => {
        const locationName = document.createElement('span');
        locationName.classList.add('text-float')
        locationName.textContent = input;
        locationName.style.left = event.e.x.toString();
        locationName.style.top = event.e.y.toString();
        document.body.appendChild(locationName)
      }
    });

    
  }
}

export { HandleDoubleClick };

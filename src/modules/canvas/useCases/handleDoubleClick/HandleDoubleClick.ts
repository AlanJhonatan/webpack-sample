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

    console.log(swal)
      
    //   const labelElement = document.createElement('span');
    //   labelElement.classList.add('text-float')
    //   labelElement.textContent = locationName;
    //   labelElement.style.left = event.e.x.toString() + 'px';
    //   labelElement.style.top = event.e.y.toString() + 'px';
    //   document.body.appendChild(labelElement)
    // const rect = rectElement.create({
    //   x: event.e.x,
    //   y: event.e.y,
    //   label: locationName
    // });

    // rect.on('moving', function (event) {
    //   console.log('moving', event)
    // })
    
    // mainCanvas.canvas.add(rect);
  }
}

export { HandleDoubleClick };

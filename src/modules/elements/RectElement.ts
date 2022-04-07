import { fabric } from "fabric";
import { ICanvasElement } from "../../interfaces/ICanvasRect";

class RectElement implements ICanvasElement {
  public element!: fabric.Rect;

  create(x: number, y: number, name: string): void {
    this.element = new fabric.Rect({
      top: y,
      left: x,
      width: 50,
      height: 50,
      fill: '#fff',
      lockRotation: true,
      shadow: new fabric.Shadow({
        color: 'black',
        blur: 2,
      }),
      data: {
        name,
      }
    });

    this.element.data = {};

    this.element.on('dragover', function (event) {
      console.log(event)
    });
  }

  move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }

  delete(): void {
    this.element.canvas?.remove(this.element);    
  }
}

export { RectElement };

import { fabric } from 'fabric';

interface ICreateElement {
  x: number,
  y: number,
  width?: number,
  height?: number,
  label?: string,
}

interface IElement {
  create({x, y, width, height, label}: ICreateElement): fabric.Object
  delete(): void
}

class RectElement implements IElement {
  create({ x, y, label }: ICreateElement): fabric.Object {
    const rect = new fabric.Rect({
      left: x,
      top: y,
      width: 50,
      height: 50,
      fill: '#ffffff',
      shadow: new fabric.Shadow({
        color: 'black',
        blur: 2, 
      }),
      data: {
        label,
      }
    });
    
    return rect;
  }

  delete(): void {
    throw new Error("Method not implemented.")
  }
}

export { RectElement };

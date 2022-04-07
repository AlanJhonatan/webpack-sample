import { fabric } from 'fabric';

interface ICreateElement {
  x: number,
  y: number,
  width?: number,
  height?: number,
}

interface IElement {
  create({x, y, width, height}: ICreateElement): fabric.Object
  delete(): void
}

class RectElement implements IElement {
  create({ x, y }: ICreateElement): fabric.Object {
    const rect = new fabric.Rect({
      left: x,
      top: y,
      width: 50,
      height: 50,
      fill: '#ffffff',
      shadow: new fabric.Shadow({
        color: 'black',
        blur: 2, 
      })
    });
    
    return rect;
  }

  delete(): void {
    throw new Error("Method not implemented.")
  }
}

export { RectElement };

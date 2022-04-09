import { fabric } from 'fabric';

interface ICreateElement {
  x: number,
  y: number,
  width?: number,
  height?: number,
  label: string,
}

interface IElementData {
  id: string,
  label: string,
  locations: IElementData[],
}

interface IElement {
  create({x, y, width, height, label}: ICreateElement): fabric.Object
  delete(): void,
}

class RectElement implements IElement {
  create({ x, y, label }: ICreateElement): fabric.Object {
    const rect = new fabric.Rect({
      left: x,
      top: y,
      width: 150,
      height: 100,
      fill: '#ffffff',
      shadow: new fabric.Shadow({
        color: 'black',
        blur: 2, 
      }),
      data: {
        id: window.crypto.randomUUID(),
        label,
        locations: [],
      }
    });

    const labelElement = document.createElement('span');
    labelElement.classList.add('text-float');

    labelElement.textContent = label;
    
    labelElement.style.left = (x + 5).toString() + 'px';
    labelElement.style.top = (y + 5).toString() + 'px';
    
    document.body.appendChild(labelElement);

    rect.on('moving', function (event) {
      const [ coords ] = rect.getCoords(); 
      
      labelElement.style.left = (coords.x).toString() + 'px';
      labelElement.style.top = (coords.y).toString() + 'px';
    });
    
    return rect;
  }

  delete(): void {
    throw new Error("Method not implemented.")
  }
}

export { RectElement, IElementData };

import './modules/canvas/infra/fabricjs';
import { MainCanvas } from './modules/canvas/infra/fabricjs/MainCanvas';
import { handleDoubleClick } from './modules/canvas/useCases/handleDoubleClick/';

function app() {
  // const rectElement = new RectElement();
  const mainCanvas = MainCanvas.getInstance();


  mainCanvas.canvas.on('mouse:dblclick', handleDoubleClick.handle)
}


export { app };

import './modules/canvas/infra/fabricjs';
import { MainCanvas } from './modules/canvas/infra/fabricjs/MainCanvas';
import { detectIntersection } from './modules/canvas/useCases/detectIntersection';
import { handleDoubleClick } from './modules/canvas/useCases/handleDoubleClick/';
import { ControlInfosBar } from './modules/controls/interfaces/implementations/ControlInfosBar';
import { handleSelectionClear, handleSelectionCreated, handleSelectionUpdated } from './modules/controls/useCases/handleSelection';

function app() {
  document.addEventListener("DOMContentLoaded", function() {
    const controlBar = ControlInfosBar.Instance();
    controlBar.hide();
  });
  
  const mainCanvas = MainCanvas.getInstance();

  mainCanvas.canvas.on('mouse:dblclick', handleDoubleClick.handle)
  mainCanvas.canvas.on('object:moving', detectIntersection.handle);
  mainCanvas.canvas.on('object:scaling', detectIntersection.handle);
  mainCanvas.canvas.on('object:rotating', detectIntersection.handle);

  mainCanvas.canvas.on('selection:created', handleSelectionCreated.handle)
  mainCanvas.canvas.on('selection:cleared', handleSelectionClear.handle)
  mainCanvas.canvas.on('selection:updated', handleSelectionUpdated.handle)
}


export { app };

import { fabric } from 'fabric';
import { MainCanvas } from './MainCanvas';

const fabricCanvas = new fabric.Canvas('main-canvas', {
  width: document.body.clientWidth,
  height: document.body.clientHeight,
  backgroundColor: '#F0F4F7'
});

MainCanvas.Instance(fabricCanvas);
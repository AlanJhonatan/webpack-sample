import { fabric } from "fabric";

const canvas = new fabric.Canvas('main-canvas', {
  width: document.body.clientWidth,
  height: document.body.clientHeight,
});

canvas.on('mouse:dblclick', function (event) {
  console.log('mouse down !', event);

  let rect = new fabric.Rect({
    fill: 'green',
    left: 2,
    top: 2,
    width: 100,
    height: 100,
    lockRotation: true,
  });

  canvas.add(rect);
});

// canvas.item(0);
// canvas.getObjects();

console.log(canvas)
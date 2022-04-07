import { fabric } from "fabric";
import { RectElement } from "./modules/elements/RectElement";

const canvas = new fabric.Canvas('main-canvas', {
  width: document.body.clientWidth,
  height: document.body.clientHeight,
  backgroundColor: '#F0F4F7',
});

canvas.on('mouse:dblclick', function (event) {
  const rect = new RectElement();
  rect.create(event.e.x, event.e.y, 'Nome !');
  canvas.add(rect.element);
});

document.addEventListener('keydown', function (event) {
  // console.log(event)

  if(event.keyCode === 68) {
    canvas.getActiveObjects().map(element => {
      element.canvas?.remove(element)
    })
  }
});

function onChange(options) {
  options.target.setCoords();
  canvas.forEachObject(function(obj) {
    if (obj === options.target) return;
    console.log(obj.data)
    obj.set('opacity' ,options.target.intersectsWithObject(obj) ? 0.5 : 1);
  });
}

canvas.on('object:moving', onChange)
canvas.on('object:scaling', onChange)
canvas.on('object:rotating', onChange)

// console.log(canvas)
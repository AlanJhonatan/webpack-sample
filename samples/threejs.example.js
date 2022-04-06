import {
  BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial( { color: '#a020f0' } );
const cube = new Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2


function animate() {
  requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

let angle = 0;
setInterval(() => {
  console.log(cube.rotation)
  cube.rotateOnAxis
}, 1000)
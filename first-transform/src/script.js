import * as THREE from 'three';
import {update} from 'three/examples/jsm/libs/tween.module.js';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(geometry, material);

mesh.position.x += 1;
mesh.position.y += -0.5;
mesh.position.z += 0.5;

mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.lookAt(new THREE.Vector3(0, -1, 0));
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

function updateFrame() {
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}

updateFrame();

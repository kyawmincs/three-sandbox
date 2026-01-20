import * as THREE from 'three';

const sizes = {
  width: 800,
  height: 600,
};

function transformCube() {
  mesh.position.x = 0.7;
  mesh.position.y = -0.6;
  mesh.position.z = 1;

  mesh.rotation.x = Math.PI * 0.25;
  mesh.rotation.y = Math.PI * 0.25;
}

const quaternion = new THREE.Quaternion();
quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
const vector = new THREE.Vector3(1, 0, 0);
vector.applyQuaternion(quaternion);

// Canvas + object init
const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const mesh = new THREE.Mesh(geometry, material);

// Camera + renderer init
const camera = new THREE.PerspectiveCamera(45.0, 1, 1, 200.0); // view angle, aspect ratio, near, far
camera.position.set(5.0, 5.0, 5.0);
camera.lookAt(mesh.position);
scene.add(camera);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

scene.add(mesh);

const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

function update() {
  // Requests the next update call, this creates a loop
  requestAnimationFrame(update);
  transformCube();
  renderer.render(scene, camera);
}

update();
console.log(mesh.position.distanceTo(camera.position));

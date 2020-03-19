import * as THREE from 'three';

const buildScene = () => {
  return new THREE.Scene();
}

const buildRenderer = (canvas) => {
    const renderer = new THREE.WebGLRenderer( { canvas, antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( canvas.width, canvas.height, false );

    return renderer;
}

const buildCamera = (canvas) => {
  const camera = new THREE.PerspectiveCamera( 70, canvas.width / canvas.height, 1, 1000 );
  camera.position.z = 400;

  return camera;
}

const CubeScene = (height, width, depth, color) => {
  const scene = buildScene();
  let renderer, camera;

  const init = (canvas) => {
    renderer = buildRenderer(canvas);
    camera = buildCamera(canvas);
  };

  const update = () => {
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  // no-op
  const onWindowResize = () => {};

  const geometry = new THREE.BoxBufferGeometry( height, width, depth );
  const material = new THREE.MeshBasicMaterial( { color } );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add(mesh);

  return { init, update, onWindowResize };
};

export default CubeScene;
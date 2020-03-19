import React, { useState } from 'react';

import ThreeSceneRenderer from './ThreeSceneRenderer';
import CubeScene from './three-scenes/CubeScene'

const CubeWithControls = () => {
  const [{ height, width, depth }, setState] = useState({
    height: 200,
    width: 200,
    depth: 200,
  });
  const handleUpdate = (prop) => {
    return (event) => {
      setState(state => ({ ...state, [prop]: parseInt(event.target.value, 10) }));
    };
  };

  const scene = CubeScene(height, width, depth);

  return (
    <div>
      <label>
        Height
        <input type="number" value={`${height}`} onChange={handleUpdate('height')} />
      </label>
      <label>
        Width
        <input type="number" value={`${width}`} onChange={handleUpdate('width')} />
      </label>
      <label>
        Depth
        <input type="number" value={`${depth}`} onChange={handleUpdate('depth')} />
      </label>
      <ThreeSceneRenderer scene={scene} height={400} width={400} />
    </div>
  )
}

export default CubeWithControls;
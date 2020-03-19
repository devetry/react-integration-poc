import React from 'react';

import CubeWithControls from './CubeWithControls';
import Editor from './Editor';
import './App.css';

function App() {
  const [color, setColor] = React.useState('#FF0000');

  return (
    <div className="App">
      <CubeWithControls color={color} />
      <Editor color={color} setColor={setColor} />
    </div>
  );
}

export default App;

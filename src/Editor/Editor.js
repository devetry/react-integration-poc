import React from 'react'
import { VueWrapper } from 'vuera'
import { Photoshop } from 'vue-color'


const Editor = ({ color, setColor }) => (
  <div>
    <div>
      <VueWrapper
        component={Photoshop}
        value={color}
        on={{
          'input': (event) => { setColor(event.hex); },
        }}
      />
    </div>
  </div>
);

export default Editor;
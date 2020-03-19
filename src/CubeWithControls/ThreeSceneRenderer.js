import React from 'react';

class ThreeSceneRenderer extends React.Component {

  threeRootElement;

  constructor(props) {
    super(props);
    this.state = {
      requestId: null,
      canvas: null,
    }
  }

  componentDidMount() {
    const canvas = this._createCanvas();
    this.props.scene.init(canvas);

    window.addEventListener('resize', this.props.scene.onWindowResize);

    this.setState({ canvas }, this._draw);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.scene === this.props.scene) {
      return;
    }
    cancelAnimationFrame(this.state.requestId);
    this._destroyCanvas();

    const canvas = this._createCanvas();
    this.props.scene.init(canvas);

    this.setState({ canvas }, this._draw);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.state.requestId);
    window.removeEventListener('resize', this.props.scene.onWindowResize);
  }

  render() {
    return (
      <div ref={element => this.threeRootElement = element} />
    );
  }

  _createCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('style', `height: ${this.props.height}px;width: ${this.props.width}px;`);
    canvas.setAttribute('height', this.props.height);
    canvas.setAttribute('width', this.props.width);
    canvas.setAttribute('random', Math.random());
    this.threeRootElement.appendChild(canvas);

    return canvas;
  }

  _destroyCanvas = () => {
    this.threeRootElement.removeChild(this.state.canvas);
  }

  _draw = () => {
    this.props.scene.update();

    this.setState({
      requestId: requestAnimationFrame(this._draw),
    })
  }
}

export default ThreeSceneRenderer;
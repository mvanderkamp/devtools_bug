
class Input {
  constructor(event) {
    this.current = event;
  }
}

const inputs = [];

[
  'mousedown',
  'mousemove',
  'mouseup',
  'touchstart',
  'touchmove',
  'touchend',
  // 'pointerdown',
  // 'pointermove',
  // 'pointerup',
].forEach( type => window.addEventListener(type, (e) => {
  inputs.push(new Input(e));
}));


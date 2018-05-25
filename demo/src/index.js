import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'button-react';

const Index = () => {
  return (
    <div>
      Hello React!
      <input/>
      <Button>
        submit
      </Button>
    </div>);
};

ReactDOM.render(<Index />, document.getElementById('index'));

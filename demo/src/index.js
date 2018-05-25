import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'button-for-react';

const Index = () => {
  return (
    <div>
      Hello React!
      <input/>
      <Button
        render={{
          loader: () => (<span> Loading ... </span>),
          error: (err) => (<span> Got error {err} </span>)
        }}
      >
        submit
      </Button>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));

import React from 'react';

export default function (props) {
  return (
    <button
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  )
}

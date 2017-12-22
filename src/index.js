import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="Tweet">
      Yo
    </div>
  )
}

ReactDOM.render(<Tweet />, document.querySelector('#root'));
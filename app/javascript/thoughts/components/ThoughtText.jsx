import React from 'react';

const ThoughtText = (props) => (
  <div className='thought'>
    <div className='thought-open'>“</div>
    <div className='thought-close'>”</div>

    <div className="thought-text">
      {props.thought.text}
    </div>
  </div>
)

export default ThoughtText

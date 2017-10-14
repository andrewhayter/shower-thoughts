import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtNavigation = (props) => {
  let element = null
  if (props.direction === 'previous') {
    element = (
      <Link className='link-previous' to={`/?thought=${props.otherThoughtId}`}>
        <i className='fa fa-angle-left' aria-hidden='true'><span /></i>
      </Link>
    )
  } else {
    element = (
      <Link className='link-next' to={`/?thought=${props.otherThoughtId}`}>
        <i className='fa fa-angle-right' aria-hidden='true'><span /></i>
      </Link>
    )
  }
  return element
}

export default ThoughtNavigation

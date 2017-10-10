import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import ThoughtText from './ThoughtText';
import ThoughtNavigation from './ThoughtNavigation';

class ThoughtsDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      thought: {},
      fireRedirect: false
    }
  }

  fetchThought (id) {
    axios.get(`api/thoughts/${id}`)
      .then(response => {
        this.setState({ thought: response.data });
      })
      .catch(error => {
        console.error(error);
      })
  }

  setThoughtIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs)
    if (this.qsParams.thought) {
      // assign thought ID from the URL's query string
      this.thoughtId = Number(this.qsParams.thought)
    } else {
      this.thoughtId = this.props.startingThoughtId;
      // update URL in browser to reflect current thought in query string
      this.props.history.push(`/?thought=${this.thoughtId}`)
    }
  }

  componentDidMount () {
    this.setThoughtIdFromQueryString(this.props.location.search);
    this.fetchThought(this.thoughtId);
  }

  componentWillReceiveProps (nextProps) {
    this.setThoughtIdFromQueryString(nextProps.location.search);
    this.fetchThought(this.thoughtId);
  }

  render () {
  const thought = this.state.thought

  const nextThoughtId = thought.next_id
  const previousThoughtId = thought.previous_id

  return (
    <div>
      <div className="thought-container">

        {this.state.fireRedirect &&
        <Redirect to={'/'} />
        }

        {previousThoughtId &&
        <ThoughtNavigation direction='previous' otherThoughtId={previousThoughtId} />
        }

        <ThoughtText thought={this.state.thought} />

        {nextThoughtId &&
        <ThoughtNavigation direction='next' otherThoughtId={nextThoughtId} />
        }

      </div>
    </div>
   )
  }
}

export default ThoughtsDisplay;

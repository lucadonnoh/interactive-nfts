import React from 'react';

import './NotFound.css';

class NotFound extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="not-found">
        <h1>Not Found</h1>
      </div>
    );
  }
}

export default NotFound;

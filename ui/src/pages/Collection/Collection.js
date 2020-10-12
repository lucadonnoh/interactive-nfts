import React from 'react';

import './Collection.css';
import Layout from '../../components/Layout';

class Collection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
      <div className="collection">
        <h1>Collection</h1>
      </div>
      </Layout>
    );
  }
}

export default Collection;

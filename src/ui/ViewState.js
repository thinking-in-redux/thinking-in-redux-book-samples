import React from 'react';
import {connect} from 'react-redux';

const format = (json) => JSON.stringify(json, 1, 1);

const ViewState = ({viewState}) => (
  <div className="code-container">
    <pre>{format(viewState)}</pre>
  </div>
);

const mapStateToProps = state => ({
  viewState: state
});

export default connect(mapStateToProps)(ViewState);

import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from "../redux/actions/books.actions"

const Dispatchers = (props) => (
  <div className="dispatchers">
    <button className="dispatch-button" onClick={() => props.fetchBooks('')}><i className="fa fa-rocket" /></button>
    <button className="dispatch-button"><i className="fa fa-undo" /></button>
  </div>
);

export default connect(null,{ fetchBooks })(Dispatchers);

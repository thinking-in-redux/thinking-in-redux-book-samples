// feature name
export const BOOKS = '[Books]';

// action types
export const FETCH_BOOKS = `${BOOKS} FETCH`;
export const SET_BOOKS   = `${BOOKS} SET`;

// action creators
export const fetchBooks = ({query}) => ({
  type: FETCH_BOOKS,
  payload: query
});

export const setBooks = ({books}) => ({
  type: SET_BOOKS,
  payload: books
});

import {SET_BOOKS} from "../actions/books";

const initState = [];

export const booksReducer = (books = initState, action) => {
  switch (action.type) {

    case SET_BOOKS:
      return action.payload;

    default:
      return books;
  }
};

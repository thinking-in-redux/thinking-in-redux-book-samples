import {SET_BOOKS} from "../actions/books.actions";

const initState = [];

export const booksReducer = (books = initState, action) => {
  switch (action.type) {

    case SET_BOOKS:
      return action.payload;

    default:
      return books;
  }
};

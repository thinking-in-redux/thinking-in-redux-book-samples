const initState = [];

export const booksReducer = (books = initState, action) => {
  switch (action.type) {

    case SET_BOOKS:
      return payload;

    default:
      return books;
  }
};
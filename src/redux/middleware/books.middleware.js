import {BOOKS, FETCH_BOOKS, setBooks} from "../actions/books.actions";
import {API_ERROR, API_SUCCESS, apiRequest} from "../actions/api.actions";
import {setLoader} from "../actions/ui.actions";
import {setNotification} from "../actions/notification.actions";

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=redux';

export const booksMiddleware = () => (next) => (action) => {
  next(action);

  switch (action.type) {

    case FETCH_BOOKS:
      next(apiRequest({body: null, method: 'GET', url: BOOKS_URL,  BOOKS));
      next(setLoader(true, BOOKS));
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next(setBooks(action.payload.items));
      next(setLoader(false, BOOKS));
      break;

    case `${BOOKS} ${API_ERROR}`:
      next(setNotification(action.payload, BOOKS));
      next(setLoader(false, BOOKS));
      break;
  }
};

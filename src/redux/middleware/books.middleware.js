import { BOOKS, FETCH_BOOKS, setBooks } from "../actions/books.actions";
import { apiRequest, API_SUCCESS, API_ERROR } from "../actions/api.actions";
import { setLoader } from "../actions/ui.actions";
import { setNotification } from "../actions/notification.actions";

export const booksMiddleware = () => (next) => (action) => {
  next(action);

  switch (action.type) {

    case FETCH_BOOKS:
      next(apiRequest(null, 'GET', API.BOOKS, BOOKS));
      next(setLoader(true, BOOKS));
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next(setBooks(action.payload));
      next(setLoader(false, BOOKS));
      break;

    case `${BOOKS} ${API_ERROR}`:
      next(setNotification(action.payload, BOOKS));
      next(setLoader(false, BOOKS));
      break;
  }
};

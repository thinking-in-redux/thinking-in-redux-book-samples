// action types
export const SET_NOTIFICATION = 'SET_NOTIFICATION';

// action creators
export const setNotification = (message, entity) => ({
  type: `${entity} ${SET_NOTIFICATION}`,
  payload: message,
  meta: entity
});
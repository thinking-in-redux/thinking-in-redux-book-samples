import { SET_NOTIFICATION } from "../actions/notification.actions"

const initState = [];

export const notificationsReducer = (notifications = initState, action) => {
  switch (true) {

    case action.type.includes(SET_NOTIFICATION):
      return [...notifications, action.payload];

    default:
      return notifications;
  }
};
// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR   = 'API_ERROR';

// action creators
export const apiRequest = ({body, method, url, entity}) => ({
  type: `${entity} ${API_REQUEST}`,
  payload: body,
  meta: {method, url, entity}
});

export const apiSuccess = ({response, feature}) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: {feature}
});

export const apiError = ({error, feature}) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: {feature}
});

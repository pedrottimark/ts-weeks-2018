const checkResponse = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
};

const convertToJSON = response => {
  checkResponse(response);
  return response.json();
};

export const fetchGetFoods = category => fetch(`/foods`).then(convertToJSON);

export const fetchGetPortions = category => fetch(`/portions`).then(convertToJSON);

export const fetchPostPortion = ({foodId, quantity}) => fetch(`/portions`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({foodId, quantity})
}).then(convertToJSON);

export const fetchPutPortion = portion => fetch(`/portions/${portion.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(portion)
}).then(convertToJSON);

export const fetchDeletePortion = portionId => fetch(`/portions/${portionId}`, {
  method: 'DELETE',
}).then(checkResponse);

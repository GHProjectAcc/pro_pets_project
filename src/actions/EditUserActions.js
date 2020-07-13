export const UPDATE_PHONE = 'UPDATE_PHONE';
export const UPDATE_NAME = 'UPDATE_NAME';

export const editPhone = payload => ({
    type: UPDATE_PHONE,
    payload: payload
});

export const editName = payload => ({
    type: UPDATE_NAME,
    payload: payload
});
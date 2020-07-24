export const UPDATE_PHONE = 'UPDATE_PHONE';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_FBLINK = 'UPDATE_FBLINK';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';


export const editPhone = payload => ({
    type: UPDATE_PHONE,
    payload: payload
});

export const editName = payload => ({
    type: UPDATE_NAME,
    payload: payload
});

export const editFBLink = payload => ({
    type: UPDATE_FBLINK,
    payload: payload
});

export const editEmail = payload => ({
    type: UPDATE_EMAIL,
    payload: payload
});
